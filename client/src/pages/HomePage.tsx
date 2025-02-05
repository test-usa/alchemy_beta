import BestServices from "../section/Home/BestServices"
import CustomerSay from "../section/Home/CustomerSay"
import Hero from "../section/Home/Hero"
import LatestArticle from "../section/Home/LatestArticle"

const HomePage = () => {
  return (
    <div className="w-full overflow-hidden mx-auto">
      <Hero/>
      <BestServices />
      <LatestArticle/>
      <CustomerSay/>
    </div>
  )
}

export default HomePage