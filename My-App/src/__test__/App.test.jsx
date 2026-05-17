import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "../components/ProductCard";
import { describe, it, expect, vi } from "vitest";

describe("ProductCard", () => {
  const mockProduct = {
    id: 1,
    name: "Test Coffee",
    description: "Nice coffee",
    origin: "Kenya",
    roast: "Medium",
    price: 10,
  };

  it("renders product name", () => {
    render(
      <ProductCard
        product={mockProduct}
        onUpdate={() => {}}
        onDelete={() => {}}
      />
    );

    expect(screen.getByText("Test Coffee")).toBeInTheDocument();
  });

  it("calls delete function", () => {
    const onDelete = vi.fn();

    render(
      <ProductCard
        product={mockProduct}
        onUpdate={() => {}}
        onDelete={onDelete}
      />
    );

    fireEvent.click(screen.getByText("Delete"));
  });
});