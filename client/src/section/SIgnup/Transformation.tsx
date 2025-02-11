import { StepperContext } from "@/providers/StepperProvider";
import { FormEvent, useContext, useEffect, useRef, useState } from "react";

const Transformation = () => {
  const { state5, setState5, userData, setUserData } = useContext(StepperContext)
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploaded, setUploaded] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleImageChange = (e: FormEvent) => {
    const target = e.target as HTMLInputElement;
    const file = target?.files?.[0];
    if (!file || !file.type.startsWith("image/")) {
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSendMessage = async () => {
    if (!imagePreview) return;
    setUserData((prevData: { transformation: string }) => ({ ...prevData, transformation: "FAKA" }));
    setImagePreview(null);
    setUploaded(true);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  useEffect(() => {
    if (uploaded) {
      setState5(true);
    } else {
      setState5(false);
    }
  }, [uploaded, setUploaded, setState5, state5]);

  console.log(userData)

  return (
    <div>
      <h2 className="text-4xl text-center font-semibold my-10">Capture Your Transformation</h2>
      {/* Hidden file input */}
      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={fileInputRef}
        disabled={imagePreview !== null}
        onChange={handleImageChange}
      />

      {/* Choose files area */}
      <button
        type="button"
        className={`hidden sm:flex flex-col justify-center items-center w-full h-60 rounded border border-dashed 
                     ${imagePreview ? "text-red-500" : "text-zinc-400"}`}
        onClick={() => fileInputRef.current?.click()}
      >
        {
          imagePreview ? (
            // Image preview
            <div className="relative">
              <img className="h-60 object-contain object-center" src={imagePreview} alt="" />
              <button
                onClick={removeImage}
                className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-base-300
              flex items-center justify-center"
                type="button"
              >
                <p className="rounded-full border border-red-500 px-2 bg-red-100 text-center flex items-center justify-center">x</p>
              </button>
            </div>
          ) : (
            // Choose files
            <>
              <p className="text-[#6636EE] font-bold text-xl bg-zinc-100 rounded-lg px-5 py-2 w-fit block mb-3">Choose Files</p>
              <p className="text-sm ">JPG,JPEG,PNG Max 20mb</p>
            </>
          )
        }
      </button>

      {/* Upload button */}
      <button
        onClick={handleSendMessage}
        className="w-full py-2 px-4 cursor-pointer rounded bg-[#6636EE] text-white outline-none mt-3"
      >
        Upload
      </button>
    </div>
  )//
}

export default Transformation