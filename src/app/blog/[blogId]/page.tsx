
import React from "react";

const DynamicBlogPage = async ({
    params,
}: {
    params: Promise<{ blogId: string }>; 
}) => {
    // as its a server component by default we can use async
    // as this is a server component we are getting the params as promise 

    const { blogId } = await params;

    console.log(blogId);
    return (
        <div>
            <h1>Dynamic Blog Page Blog Id : {blogId} </h1>
        </div>
    );
};

export default DynamicBlogPage;