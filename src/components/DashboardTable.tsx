import { useState } from "react";
import {
  useGetProductsQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
} from "@/redux/features/productsApi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
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
import { useForm, SubmitHandler } from "react-hook-form";
import { Toaster, toast } from "sonner";

// Define types
interface Product {
  _id: string;
  name: string;
  brand: string;
  price: number;
  available_quantity: number;
  image: string;
  rating: number;
  description: string;
}

interface UpdateProductFormData {
  productName?: string;
  brand?: string;
  quantity?: number;
  price?: number;
  image?: string;
  ratings?: number;
  description?: string;
}

function DashboardTable() {
  const { data, error, isLoading } = useGetProductsQuery("");
  const [updateId, setUpdateId] = useState<string>("");
  const [deleteId, setDeleteId] = useState<string>("");
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();
  const { register, handleSubmit, reset } = useForm<UpdateProductFormData>();

  const handleUpdate = (id: string) => {
    setUpdateId(id);
  };

  const handleDelete = (id: string) => {
    setDeleteId(id);
  };

  const onSubmitUpdate: SubmitHandler<UpdateProductFormData> = async (
    formData
  ) => {
    const productData: Partial<Product> = {};

    if (formData.productName) productData.name = formData.productName;
    if (formData.brand) productData.brand = formData.brand;
    if (formData.quantity) productData.available_quantity = formData.quantity;
    if (formData.price) productData.price = formData.price;
    if (formData.image) productData.image = formData.image;
    if (formData.ratings) productData.rating = formData.ratings;
    if (formData.description) productData.description = formData.description;

    try {
      await updateProduct({ id: updateId, updateData: productData }).unwrap();
      toast.success("Product updated successfully!", {
        position: "top-center",
      });
      reset();
      setUpdateId(""); // Reset updateId to close the dialog
    } catch (err) {
      toast.error("Failed to update product.", { position: "top-center" });
      console.error("Failed to update product:", err);
    }
  };

  const onSubmitDelete = async () => {
    try {
      await deleteProduct(deleteId).unwrap();
      toast.success("Product deleted successfully!", {
        position: "top-center",
      });
      setDeleteId(""); // Reset deleteId to close the dialog
    } catch (err) {
      toast.error("Failed to delete product.", { position: "top-center" });
      console.error("Failed to delete product:", err);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    toast.error("Failed to load products.");
    return <div>Error loading products!</div>;
  }

  return (
    <div className="overflow-hidden">
      <div>
        <div className="font-medium pl-3 border-b-2 border-gray-200 w-40">
          <h1>Total Products: {data?.data?.meta?.total || 0}</h1>
        </div>
        <div></div>
      </div>
      <Toaster />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Brand</TableHead>
            <TableHead className="pl-0 md:pl-28">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.result?.map((product: Product) => (
            <TableRow key={product._id}>
              <TableCell className="font-medium w-0 md:w-[500px]">
                {product.name}
              </TableCell>
              <TableCell className="w-0 md:w-[300px]">
                {product.price}
              </TableCell>
              <TableCell className="w-0 md:w-[300px]">
                {product.brand}
              </TableCell>
              <TableCell className="pl-0 md:pl-28 flex flex-row gap-1">
                <div className="text-right">
                  <Dialog
                    open={updateId === product._id}
                    onOpenChange={(open) => !open && setUpdateId("")}
                  >
                    <DialogTrigger asChild>
                      <Button
                        onClick={() => handleUpdate(product._id)}
                        className="w-7 text-xs px-6 md:px-7 lg:px-8 bg-blue-500 text-white"
                        variant="outline"
                      >
                        Update
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Update Product</DialogTitle>
                        <DialogDescription>
                          Make updates to your product here. Click save when
                          you're done.
                        </DialogDescription>
                      </DialogHeader>
                      <form
                        onSubmit={handleSubmit(onSubmitUpdate)}
                        className="grid gap-4 py-4"
                      >
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
                            {...register("quantity", { valueAsNumber: true })}
                            type="number"
                            id="quantity"
                            placeholder="Available Quantity"
                          />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                          <Label htmlFor="price">Price</Label>
                          <Input
                            {...register("price", { valueAsNumber: true })}
                            type="number"
                            id="price"
                            placeholder="Price"
                          />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                          <Label htmlFor="ratings">Ratings</Label>
                          <Input
                            {...register("ratings", { valueAsNumber: true })}
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
                <div className="text-right">
                  <Dialog
                    open={deleteId === product._id}
                    onOpenChange={(open) => !open && setDeleteId("")}
                  >
                    <DialogTrigger asChild>
                      <Button
                        onClick={() => handleDelete(product._id)}
                        className="w-7 text-xs px-6 md:px-7 lg:px-8 bg-red-500 text-white"
                        variant="outline"
                      >
                        Delete
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Delete Product</DialogTitle>
                        <DialogDescription>
                          Are you sure you want to delete this product? This
                          action cannot be undone.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button onClick={() => setDeleteId("")}>Cancel</Button>
                        <Button onClick={onSubmitDelete} className="bg-red-500">
                          Delete
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default DashboardTable;
