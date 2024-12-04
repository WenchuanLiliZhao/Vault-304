import React, { useState } from "react";
import { MDBlock } from "../../compenents/Markdown/MDBlock";

interface ImageDimensions {
  width: number;
  height: number;
}

export const ImageDimensionChecker: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [imageDimensions, setImageDimensions] =
    useState<ImageDimensions | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value);
    setImageDimensions(null);
    setError(null);
  };

  const calculateDimensions = () => {
    if (!imageUrl.trim()) {
      setError("Please enter a valid image URL.");
      return;
    }

    const img = new Image();
    img.src = imageUrl;

    img.onload = () => {
      setImageDimensions({
        width: img.width,
        height: img.height,
      });
      setError(null);
    };

    img.onerror = () => {
      setError("Failed to load the image. Please check the URL.");
      setImageDimensions(null);
    };
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h2>Image Dimension Checker</h2>
      <div>
        <input
          type="text"
          placeholder="Enter image URL"
          value={imageUrl}
          onChange={handleInputChange}
          style={{
            padding: "8px",
            width: "300px",
            marginRight: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <button
          onClick={calculateDimensions}
          style={{
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Check Dimensions
        </button>
      </div>
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      {imageDimensions && (
        <div>
          <p style={{ marginTop: "10px" }}>
            Image Dimensions: <strong>{imageDimensions.width}px</strong> x{" "}
            <strong>{imageDimensions.height}px</strong>
          </p>

<MDBlock>
{`
\`\`\`tsx
<Figure
  src="${imageUrl}"
  ratio={[ ${imageDimensions.width} , ${imageDimensions.height} ]}
  caption=""
/>
\`\`\`
`}
</MDBlock>
        </div>
      )}
    </div>
  );
};
