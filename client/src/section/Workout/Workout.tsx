import Breadcrumbs from "@/components/breadcrumbs";
import WorkoutPage from "@/pages/WorkoutPage";

const Workout = () => {
  return (
    <div className="">
      <Breadcrumbs
        bg="https://static.wixstatic.com/media/0e0e1e_0c8aae9e3ac34ac999469617a8a54208~mv2.jpg/v1/fill/w_320,h_128,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/0e0e1e_0c8aae9e3ac34ac999469617a8a54208~mv2.jpg"
        title="Workout"
      />
      <WorkoutPage />
    </div>
  );
};

export default Workout;
