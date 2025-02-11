import Breadcrumbs from "@/components/breadcrumbs";
import { SingleProduct } from "@/section/Shop/SingleProduct";

const ShopDetailsPage = () => {
  return (
    <div className="mt-20">
      <Breadcrumbs
        bg="https://gymfluencerscom-1eff6.kxcdn.com/wp-content/uploads/2023/05/Screenshot-2023-05-24-at-12.47.20-1024x564.png.webp"
        title="Shop Details"
        heading="Sports Tank Top"
      />
      <SingleProduct />
    </div>
  );
};

export default ShopDetailsPage
