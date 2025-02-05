interface TitleProps {
  heading: string;
  subHeading?: string;
}
const Title: React.FC<TitleProps> = ({ heading, subHeading }) => {
  return (
    <div className=" text-center ">
      <h2 className="text-4xl font-bold text-primary mb-4 font-[Inter] text-center text-[40px] leading-[52.8px] tracking-[-1%]">
        {heading}
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">{subHeading}</p>
    </div>
  );
};

export default Title;
