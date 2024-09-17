/* eslint-disable @typescript-eslint/no-explicit-any */
import DashboardTable from "@/components/DashboardTable";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAddProductMutation } from "@/redux/features/productsApi";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, reset: formReset } = useForm();
  const [addProduct] = useAddProductMutation();

  const onSubmit = async (data: any) => {
    const productData = {
      name: data.productName,
      brand: data.brand,
      available_quantity: Number(data.quantity),
      price: Number(data.price),
      image: data.image,
      rating: Number(data.ratings),
      description: data.description,
    };

    try {
      await addProduct(productData).unwrap();
      formReset();
      toast.success("Product added successfully!", {
        position: "top-center",
      });
      setIsOpen(false); // Close the dialog on successful submission
    } catch (err) {
      console.error("Failed to add product:", err);
      toast.error("Failed to add product!", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="overflow-hidden max-w-7xl px-2 mx-auto">
      <Toaster />
      <div className="text-right pr-3 pt-6">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              className="w-7 text-xs md:text-xs lg:text-sm px-10 md:px-10 lg:px-12 bg-yellow-500"
              variant="outline"
            >
              Add Product
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Product</DialogTitle>
              <DialogDescription>
                Make added to your product here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="productName">Product Name</Label>
                <Input
                  {...register("productName")}
                  type="text"
                  id="productName"
                  placeholder="Product Name"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="brand">Brand</Label>
                <Input
                  {...register("brand")}
                  type="text"
                  id="brand"
                  placeholder="Brand"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="quantity">Available Quantity</Label>
                <Input
                  {...register("quantity")}
                  type="number"
                  id="quantity"
                  placeholder="Available Quantity"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="price">Price</Label>
                <Input
                  {...register("price")}
                  type="number"
                  id="price"
                  placeholder="Price"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="ratings">Ratings</Label>
                <Input
                  {...register("ratings")}
                  type="number"
                  id="ratings"
                  placeholder="Ratings"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="image">Image URL</Label>
                <Input
                  {...register("image")}
                  type="url"
                  id="image"
                  placeholder="Image URL"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  {...register("description")}
                  id="description"
                  placeholder="Description"
                />
              </div>
              <DialogFooter>
                <Button type="submit">Submit</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <DashboardTable />
    </div>
  );
}

export default Dashboard;
