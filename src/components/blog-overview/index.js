'use client';


import { useEffect, useState } from "react";
import AddNewBlog from "../add-new-blog";

import { Button } from "../ui/button";

import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card"
import { useRouter } from "next/navigation";


const initialBlogFormData = {
    title: '',
    description: '',
}

const BlogOverview = ({ blogList }) => {

    const [openBlogDialog, setOpenBlogDialog] = useState(false);
    const [loading, setLoading] = useState(false);
    const [blogFormData, setBlogFormData] = useState(initialBlogFormData);

    const router = useRouter();

    console.log(blogList);

    useEffect(() => {
        router.refresh();
    }, [])

    async function handleSaveBlogData() {
        try {
            setLoading(true)
            const apiResponse = await fetch('/api/add-blog', {
                method: 'POST',
                body: JSON.stringify(blogFormData)
            });

            const result = await apiResponse.json();
            if (result?.success) {
                setBlogFormData(initialBlogFormData)
                setOpenBlogDialog(false)
                setLoading(false)
                router.refresh();
            }

        } catch (error) {
            console.log(error);
            setLoading(false)
            setBlogFormData(initialBlogFormData)
        }
    }

    return (
        <div className="min-h-screen flex flex-col gap-6 bg-gradient-to-r from-purple-500 to-blue-600 p-6">
            <div>
                <AddNewBlog
                    openBlogDialog={openBlogDialog}
                    setOpenBlogDialog={setOpenBlogDialog}
                    loading={loading}
                    setLoading={setLoading}
                    blogFormData={blogFormData}
                    setBlogFormData={setBlogFormData}
                    handleSaveBlogData={handleSaveBlogData}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                    {
                        blogList && blogList.length > 0
                            ?
                            blogList.map((blogItem) =>
                                <Card className="p-5">
                                    <CardContent>
                                        <CardTitle className="mb-5">{blogItem?.title}</CardTitle>
                                        <CardDescription>{blogItem.description}</CardDescription>
                                        <div className="mt-5 flex gap-5 items-center">
                                            <Button>Edit</Button>
                                            <Button>Delete</Button>
                                        </div>
                                    </CardContent>
                                </Card>

                            )
                            : null
                    }
                </div>
            </div>
        </div>
    )
}

export default BlogOverview