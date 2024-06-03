'use component';

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

const AddNewBlog = ({ openBlogDialog, setOpenBlogDialog, loading, setLoading, blogFormData, setBlogFormData, handleSaveBlogData }) => {

    return (
        <div>
            <div>
                <Button onClick={() => setOpenBlogDialog(true)}>Add new blog</Button>
            </div>
            <Dialog open={openBlogDialog} onOpenChange={() => {
                setOpenBlogDialog(false)
                setBlogFormData({
                    title: '',
                    description: ''
                })
            }}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add new blog</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="title" className="text-right">
                                Title
                            </Label>
                            <Input
                                id="title"
                                name="title"
                                value={blogFormData.title}
                                placeholder="Enter title..."
                                className="col-span-3"
                                onChange={(event) => setBlogFormData({
                                    ...blogFormData,
                                    title: event.target.value
                                })}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">
                                Description
                            </Label>
                            <Input
                                id="description"
                                name="description"
                                value={blogFormData.description}
                                placeholder="Enter description..."
                                className="col-span-3"
                                onChange={(event) => setBlogFormData({
                                    ...blogFormData,
                                    description: event.target.value
                                })}
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button onClick={handleSaveBlogData} type="button">
                            {
                                loading ? 'Saving changes' : 'Save changes'
                            }
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddNewBlog