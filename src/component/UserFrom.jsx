"use client"
import { Input, Label } from "@heroui/react";
import React from "react";

const UserFrom = ({createUser}) => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-4xl">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Add New Travel Package
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Create a new travel package and share an amazing destination with
            your travelers.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
          <form action={createUser} className="space-y-6">
            {/* Destination Name */}
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-gray-700">
                Destination Name
              </Label>
              <Input
                name="destinationName"
                placeholder="Bali Paradise"
                className="w-full"
              />
            </div>

            {/* Country & Category */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-gray-700">
                  Country
                </Label>
                <Input
                  name="country"
                  placeholder="Indonesia"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-semibold text-gray-700">
                  Category
                </Label>
                <Input name="category" placeholder="Beach" className="w-full" />
              </div>
            </div>

            {/* Price & Duration */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-gray-700">
                  Price (USD)
                </Label>
                <Input
                  name="price"
                  type="number"
                  min="0"
                  placeholder="e.g., 1299"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-semibold text-gray-700">
                  Duration
                </Label>
                <Input
                  name="duration"
                  placeholder="e.g., 7 Days / 6 Nights"
                  className="w-full"
                />
              </div>
            </div>

            {/* Departure Date */}
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-gray-700">
                Departure Date
              </Label>
              <Input name="departureDate" type="date" className="w-full" />
            </div>

            {/* Image URL */}
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-gray-700">
                Image URL
              </Label>
              <Input
                name="image"
                type="URL"
                placeholder="https://example.com/image.jpg"
                className="w-full"
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-gray-700">
                Description
              </Label>
              <textarea
                name="description"
                rows={5}
                placeholder="Describe the travel experience..."
                className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col-reverse justify-end gap-3 border-t border-gray-200 pt-6 sm:flex-row">
              <button
                type="reset"
                className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="rounded-xl bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Add Travel Package
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserFrom;
