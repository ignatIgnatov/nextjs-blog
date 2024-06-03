'use client';

import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";
import AddNewBlog from "../add-new-blog";
import { Title } from "@radix-ui/react-dialog";

const initialBlogFormData = {
    title: '',
    description: '',
}

const BlogOverview = () => {

    const [openBlogDialog, setOpenBlogDialog] = useState(false);
    const [loading, setLoading] = useState(false);
    const [blogFormData, setBlogFormData] = useState(initialBlogFormData);

    console.log(blogFormData);

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
            }
            console.log(result);

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
            </div>
            <div>
                Blog list section
            </div>

        </div>
    )
}

export default BlogOverview