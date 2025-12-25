import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

export default function BlogPost({ setBlogs, data, setData, error, setError, loading, setLoading }) {
    const API_URL = import.meta.env.VITE_API_URL;

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        fetch(`${API_URL}/blog-post/${id}`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, []);

    if (loading) {
        return <h1 className="text-3xl text-center text-white font-bold my-4">Loading...</h1>
    }

    if (error) {
        return <h1 className="text-3xl text-center text-white font-bold my-4">Error: {error.message}</h1>
    }

    const handleDelete = (id) => {
        setLoading(true);
        fetch(`${API_URL}/delete_blog/${id}`, {
            method: "DELETE"
        }).then(res => res.json())
            .then(() => setBlogs(prev => prev.filter((i) => i.id !== id)))
            .catch(err => setError(err))
            .finally(() => {
                setLoading(false)
                navigate("/blog");
            })
    }

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex items-center justify-center">
                {data.map((info) => (
                <div 
                    className="blog-post flex flex-col items-center justify-center border-2 border-blue-500 w-[50%] my-10 mb-10 p-3 text-center text-white rounded-xl h-[600px]"
                    key={info.id}>
                    <h2 className="text-3xl font-bold mb-7">{info.title}</h2>
                    <hr class="w-full border-1 border-white" />
                    <h3 className="text-[1.2rem] my-3">Written by <span className="font-bold">{info.author}</span> on <small>{new Date(info.date_posted).toLocaleString()}</small></h3>
                    <hr class="w-full border-1 border-white" />
                    <p className="my-3">{info.content}</p>
                    {   import.meta.env.MODE === "development" && (
                        <button className="bg-blue-500 my-3 px-3 py-[2px] w-[130px] font-bold rounded-[7px]" onClick={() => handleDelete(info.id)} type="button">Delete</button>
                    )
                    }
                    
                </div>
            ))}
            </div>
            
        </div>
    )
}