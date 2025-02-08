import Breadcrumbs from "@/components/breadcrumbs";
import { AllProducts } from "@/section/Shop/AllProducts";
import { Home } from "lucide-react";

const ShopPage = () => {
  return (
    <div>
      <Breadcrumbs bg="https://gymfluencerscom-1eff6.kxcdn.com/wp-content/uploads/2023/05/Screenshot-2023-05-24-at-12.47.20-1024x564.png.webp" title="Shop" heading="Gear Up for Greatness"/>
      <AllProducts />
    </div>
  );
};

export default ShopPage;
