import { useState } from "react";
import { Header } from "./components/Header";

function App() {
  const [brand, setBrand] = useState("");
  const [subBrand, setSubBrand] = useState("");
  const [textStyle, setTextStyle] = useState("");
  const [font, setFont] = useState("");
  const [fontSize, setFontSize] = useState("");
  const [fontColor, setFontColor] = useState("");
  const [textBold, setTextBold] = useState("");
  const [textItalic, setTextItalic] = useState("");
  const [textUnderline, setTextUnderline] = useState("");
  const [letterSpacing, setLetterSpacing] = useState("");
  const [textAlignment, setTextAlignment] = useState("");
  const [textCase, setTextCase] = useState("");
  const [shape, setShape] = useState("");
  const [shapeColor, setShapeColor] = useState("");
  const [borderStyle, setBorderStyle] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [gradientBackground, setGradientBackground] = useState("");
  const [shadowEffect, setShadowEffect] = useState("");
  const [opacity, setOpacity] = useState(1);
  const [patternOverlay, setPatternOverlay] = useState("");
  const [icon, setIcon] = useState("");
  const [dragDropEnabled, setDragDropEnabled] = useState("");
  const [resizeEnabled, setResizeEnabled] = useState("");
  const [rotation, setRotation] = useState(0);
  const [flip, setFlip] = useState("");
  const [undoRedoEnabled, setUndoRedoEnabled] = useState("");
  const [previewSize, setPreviewSize] = useState("");
  const [exportFormat, setExportFormat] = useState("");
  const [saveToCloud, setSaveToCloud] = useState("");

  function handleSubmit() {
    const data = {
      brand,
      subBrand,
      textStyle,
      font,
      fontSize,
      fontColor,
      textBold,
      textItalic,
      textUnderline,
      letterSpacing,
      textAlignment,
      textCase,
      shape,
      shapeColor,
      borderStyle,
      backgroundColor,
      gradientBackground,
      shadowEffect,
      opacity,
      patternOverlay,
      icon,
      dragDropEnabled,
      resizeEnabled,
      rotation,
      flip,
      undoRedoEnabled,
      previewSize,
      exportFormat,
      saveToCloud,
    };
    console.log("Data:", data);
  }

  return (
    <div className="flex min-h-screen min-w-96 flex-col gap-1 bg-orange-300 text-center">
      <Header />
      <div className="mt-3 text-3xl text-white">Brand</div>
      <input
        type="text"
        value={brand}
        onChange={(event) => setBrand(event.target.value)}
        className="mx-auto w-96 rounded"
      />
      <div className="text-2xl text-red-700">Sub-Brand</div>
      <input
        type="text"
        value={subBrand}
        onChange={(event) => setSubBrand(event.target.value)}
        className="mx-auto w-96 rounded"
      />
      <div className="text-2xl text-red-700">Text Style</div>
      <input
        type="text"
        value={textStyle}
        onChange={(event) => setTextStyle(event.target.value)}
        className="mx-auto w-96 rounded"
      />
      <div className="text-2xl text-red-700">Font</div>
      <input
        type="text"
        value={font}
        onChange={(event) => setFont(event.target.value)}
        className="mx-auto w-96 rounded"
      />
      <div className="text-2xl text-red-700">Font Size</div>
      <input
        type="text"
        value={fontSize}
        onChange={(event) => setFontSize(event.target.value)}
        className="mx-auto w-96 rounded"
      />
      <div className="text-2xl text-red-700">Font Color</div>
      <input
        type="text"
        value={fontColor}
        onChange={(event) => setFontColor(event.target.value)}
        className="mx-auto w-96 rounded"
      />
      <div className="text-2xl text-red-700">Text Bold</div>
      <input
        type="text"
        value={textBold}
        onChange={(event) => setTextBold(event.target.value)}
        className="mx-auto w-96 rounded"
      />
      <div className="text-2xl text-red-700">Text Italic</div>
      <input
        type="text"
        value={textItalic}
        onChange={(event) => setTextItalic(event.target.value)}
        className="mx-auto w-96 rounded"
      />
      <div className="text-2xl text-red-700">Text Underline</div>
      <input
        type="text"
        value={textUnderline}
        onChange={(event) => setTextUnderline(event.target.value)}
        className="mx-auto w-96 rounded"
      />
      <div className="text-2xl text-red-700">Letter Spacing</div>
      <input
        type="text"
        value={letterSpacing}
        onChange={(event) => setLetterSpacing(event.target.value)}
        className="mx-auto w-96 rounded"
      />
      <div className="text-2xl text-red-700">Text Alignment</div>
      <input
        type="text"
        value={textAlignment}
        onChange={(event) => setTextAlignment(event.target.value)}
        className="mx-auto w-96 rounded"
      />
      <div className="text-2xl text-red-700">Text Case</div>
      <input
        type="text"
        value={textCase}
        onChange={(event) => setTextCase(event.target.value)}
        className="mx-auto w-96 rounded"
      />
      <div className="text-2xl text-red-700">Shape</div>
      <input
        type="text"
        value={shape}
        onChange={(event) => setShape(event.target.value)}
        className="mx-auto w-96 rounded"
      />
      <div className="text-2xl text-red-700">Shape Color</div>
      <input
        type="text"
        value={shapeColor}
        onChange={(event) => setShapeColor(event.target.value)}
        className="mx-auto w-96 rounded"
      />
      <div className="text-2xl text-red-700">Border Style</div>
      <input
        type="text"
        value={borderStyle}
        onChange={(event) => setBorderStyle(event.target.value)}
        className="mx-auto w-96 rounded"
      />
      <div className="text-2xl text-red-700">Text Italic</div>
      <input
        type="text"
        value={backgroundColor}
        onChange={(event) => setBackgroundColor(event.target.value)}
        className="mx-auto w-96 rounded"
      />

      <button
        className="mx-auto w-fit rounded bg-indigo-200 px-8 py-4 text-lg"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
