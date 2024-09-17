/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import { useUpdateProductMutation } from "@/redux/features/productsApi";

function UpdateProduct() {
  const updateId = useSelector((state: any) => state.updateId);
  const { register, handleSubmit } = useForm();
  const [updateProduct, { data }] = useUpdateProductMutation();
  console.log(data);
  console.log(updateId.id);
  const onSubmit = async (formData: { productName?: string }) => {
    const productData = {
      name: formData.productName,
      // brand: formData.brand,
      // available_quantity: Number(formData.quantity),
      // price: Number(formData.price),
      // image: formData.image,
      // rating: Number(formData.ratings),
      // description: formData.description,
    };
    console.log(updateId);
    try {
      await updateProduct({
        id: updateId.id,
        data: productData,
      }).unwrap();
    } catch (err) {
      console.error("Failed to update product:", err);
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="w-7 text-xs px-6 md:px-7 lg:px-8 bg-blue-500"
            variant="outline"
          >
            Update
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Update Product</DialogTitle>
            <DialogDescription>
              Make updates to your product here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="name">Product Name</Label>
              <Input
                {...register("productName")}
                type="text"
                id="name"
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
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default UpdateProduct;
