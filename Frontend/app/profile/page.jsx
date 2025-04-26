"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  CreditCard,
  ShoppingBag,
  Heart,
  MapPin,
  Settings,
  History,
} from "lucide-react";

export default function ProfilePage() {
  const user = {
    name: "Rahul Nainala",
    email: "rahul.nainala@example.com",
    phone: "+91 9876543210",
    address: "123 Main St, 100Ft Road, Indirangar",
    joinDate: "Member since January 2022",
    orders: 12,
    wishlist: 8,
    rewards: 450,
  };

  return (
    <div className="min-h-screen py-5 sm:px-5 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/43290758?v=4"
                alt={user.name}
              />
              <AvatarFallback>
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="text-gray-600">{user.joinDate}</p>
              <div className="flex gap-2 mt-2">
                <Badge
                  variant="outline"
                  className="bg-green-100 text-green-800"
                >
                  Gold Member
                </Badge>
                <Badge variant="outline">{user.rewards} Rewards Points</Badge>
              </div>
            </div>
          </div>
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Account Settings
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="space-y-4 md:col-span-1">
            <Card>
              <CardContent className="p-4 space-y-4">
                <Button variant="ghost" className="w-full justify-start">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  My Orders
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Heart className="mr-2 h-4 w-4" />
                  Wishlist ({user.wishlist})
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <History className="mr-2 h-4 w-4" />
                  Order History
                </Button>
                <Button variant="ghost" className="w-full justify-start ">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Payment Methods
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <MapPin className="mr-2 h-4 w-4" />
                  Address Book
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-3 space-y-6">
            <Card>
              <CardHeader className="border-b">
                <CardTitle className="flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5" />
                  Recent Orders
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {[1, 2, 3].map((order) => (
                    <div key={order} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">Order #100{order}</p>
                          <p className="text-sm text-gray-500">
                            Placed on May {order}, 2023
                          </p>
                        </div>
                        <Badge variant={order === 1 ? "default" : "outline"}>
                          {order === 1 ? "Delivered" : "Shipped"}
                        </Badge>
                      </div>
                      <Separator className="my-3" />
                      <div className="flex gap-4">
                        <div className="bg-gray-100 rounded-md w-16 h-16"></div>
                        <div className="flex-1">
                          <p className="font-medium">Product Name {order}</p>
                          <p className="text-gray-600">Qty: 1</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Track Order
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="link" className="mt-4">
                  View All Orders ({user.orders})
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="border-b">
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Shipping Address
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between">
                      <p className="font-medium">Primary Address</p>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                    <p className="mt-2">{user.address}</p>
                    <p className="text-gray-600 mt-1">{user.phone}</p>
                  </div>
                  <Button variant="outline" className="w-full">
                    + Add New Address
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="border-b">
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Methods
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-gray-100 p-2 rounded">
                          <CreditCard className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium">VISA ending in 4242</p>
                          <p className="text-gray-600">Expires 05/25</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        Remove
                      </Button>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    + Add New Payment Method
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
