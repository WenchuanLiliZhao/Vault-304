import React, { useState } from "react";

const MyEditor: React.FC = () => {
  const [input, setInput] = useState<string>(""); // 输入文本
  const [output, setOutput] = useState<string>(""); // 替换后的文本

  // 处理替换逻辑
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInput(value);
    // 将 ` 替换为 \`，将 \ 替换为 \\
    const formattedText = value.replace(/\\/g, "\\\\").replace(/`/g, "\\`");
    setOutput(formattedText);
  };

  // 复制到剪贴板
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(output);
      alert("复制成功！");
    } catch (err) {
      console.error("复制失败：", err); // Log the error
      alert("复制失败，请手动复制");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h2>文本替换工具</h2>
      <textarea
        value={input}
        onChange={handleInputChange}
        placeholder="在此输入文本"
        style={{
          width: "100%",
          height: "100px",
          marginBottom: "10px",
          padding: "10px",
          fontSize: "14px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <textarea
        value={output}
        readOnly
        placeholder="处理后的文本会出现在这里"
        style={{
          width: "100%",
          height: "100px",
          marginBottom: "10px",
          padding: "10px",
          fontSize: "14px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          color: "#333",
          backgroundColor: "#f9f9f9",
        }}
      />
      <button
        onClick={handleCopy}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        复制处理后的文本
      </button>
    </div>
  );
};

export default MyEditor;
