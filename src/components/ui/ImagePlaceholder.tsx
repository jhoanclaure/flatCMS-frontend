interface Props {
  height?: string;
}

const ImagePlaceholder = ({ height = "200px" }: Props) => {
  return (
    <div
      style={{
        width: "100%",
        height,
        backgroundColor: "#ddd",
        borderRadius: "8px",
      }}
    />
  );
};

export default ImagePlaceholder;