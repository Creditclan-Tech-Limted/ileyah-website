import React, { useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import useSignupStore from "@/store/signup";
// import useSignupStore from "../../../store/signup.js";

function PictureUpload({ onBack, onNext }) {
  const { data, updateData } = useSignupStore((state) => state);
  const [image, setImage] = useState("");
  const [cropData] = useState(data?.houseImage?.picture);
  const [cropper, setCropper] = useState();

  const handleCancel = () => {
    setImage("");
  };

  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const submit = async () => {
    onNext();
    if (typeof cropper !== "undefined") {
      const profile_image = cropper.getCroppedCanvas().toDataURL();
      cropper.getCroppedCanvas().toBlob((blob) => {
        updateData({
          houseImage: { ...data?.houseImage, picture: profile_image, file: blob },
        });
      });
    }
  };
  return (
    <>
      <div>
        <button
          style={{ marginBottom: "0px" }}
          className="back"
          type="button"
          onClick={onBack}
        >
          <span aria-hidden="true">
            <i
              style={{ fontSize: "1rem !important" }}
              className="fa-solid fa-angle-left"
            ></i>
          </span>
        </button>
      </div>
      <>
        {!!image && (
          <>
            <div className="cropper">
              <Cropper
                style={{ height: 300, width: "100%" }}
                zoomTo={0.5}
                initialAspectRatio={1}
                preview=".img-preview"
                src={image}
                viewMode={1}
                minCropBoxHeight={10}
                minCropBoxWidth={10}
                background={false}
                responsive={true}
                autoCropArea={1}
                checkOrientation={false}
                onInitialized={(instance) => {
                  setCropper(instance);
                }}
                guides={true}
              />
              <div className="mt-4 w-100 d-flex justify-content-center">
                <button
                  className="call-number btn btn-outline-gray"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  className="d-flex call-number btn btn-blue-full ml-4"
                  onClick={submit}
                >
                  Upload image
                </button>
              </div>
            </div>
          </>
        )}
        {!image && (
          <>
            <div className="pt-70 pb-2">
              <p className="redirect-text font-30 text-deep-blue font-weight-bold">
                Upload house image
              </p>
              <p className="text-cc-dark font-17">
              Kindly upload a picture of yourself in front of the house
              </p>
            </div>
            <div>
              <label className="d-flex align-items-center">
                <div
                  style={{ backgroundImage: `url(${cropData})` }}
                  className="picture-upload"
                >
                  <input type="file" hidden onChange={onChange} />

                  {!cropData && (
                    <span className="picture-upload-inner pointer">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  )}
                </div>
              </label>
            </div>
          </>
        )}
        {cropData && (
          <>
            <button onClick={submit} className="call-number btn btn-primary">
              Continue with picture
            </button>
          </>
        )}
        <div style={{ right: "-6rem" }} className="illustration-image">
          <img src="/assets/images/selfie.png" width="80%" alt="" />
        </div>
      </>
    </>
  );
}

export default PictureUpload;
