'use client'
import React, { useState } from "react";
import ReactCrop, { Crop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

interface PhotoEditorProps {}


export const PhotoEditor2: React.FC<PhotoEditorProps> = () => {
    const customCrop: Crop = {
        unit: '%', // Can be 'px' or '%'
        x: 25,
        y: 25,
        width: 50,
        height: 50
      }

  const [photos, setPhotos] = useState<string[]>([]); // Массив фотографий (до 10)
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null); // Индекс выбранной фотографии
  const [crop, setCrop] = useState<Crop>(customCrop); // Текущая область обрезки
  const [aspect, setAspect] = useState<number | undefined>(1); // Текущий масштаб
  const [zoom, setZoom] = useState<number>(1); // Уровень приближения

  // Обработчик загрузки фотографий
  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    // Проверяем, чтобы общее количество фотографий не превышало 10
    if (photos.length + files.length > 10) {
      alert("Вы можете загрузить до 10 фотографий.");
      return;
    }

    // Преобразуем файлы в base64
    const newPhotos: Promise<string>[] = Array.from(files).map((file) => {
      const reader = new FileReader();
      return new Promise<string>((resolve) => {
        reader.onload = () => resolve(reader.result as string);
        reader.readAsDataURL(file);
      });
    });

    // Сохраняем загруженные фотографии
    Promise.all(newPhotos).then((photoData) => {
      setPhotos((prev) => [...prev, ...photoData]);
    });
  };

  // Изменение масштаба
  const handleAspectChange = (newAspect: number | undefined) => {
    
    setAspect(newAspect);
   
  };

  // Изменение уровня приближения
  const handleZoomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setZoom(Number(event.target.value));
  };

  return (
    <div>
      <h2>Редактор фотографий</h2>

      {/* Загрузка фотографий */}
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handlePhotoUpload}
        style={{ marginBottom: "20px" }}
        title="ff"
      />
      <p>Вы можете загрузить до 10 фотографий.</p>

      {/* Галерея фотографий */}
      <div style={styles.gallery}>
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Фото ${index + 1}`}
            style={{
              ...styles.thumbnail,
              border: selectedPhotoIndex === index ? "2px solid blue" : "none",
            }}
            onClick={() => setSelectedPhotoIndex(index)}
          />
        ))}
      </div>

      {/* Редактор выбранной фотографии */}
      {selectedPhotoIndex !== null && (
        <div style={styles.editor}>
          <ReactCrop
            crop={crop}
            onChange={(newCrop: Crop) => setCrop(newCrop)}
            aspect={aspect} // Передаем аспект сюда
            style={{ transform: `scale(${zoom})` }}
          ><img  
          src={photos[selectedPhotoIndex]}
/></ReactCrop>
          <div style={styles.controls}>
            <h3>Изменение масштаба</h3>
            <button onClick={() => handleAspectChange(1)}>1:1</button>
            <button onClick={() => handleAspectChange(4 / 5)}>4:5</button>
            <button onClick={() => handleAspectChange(16 / 9)}>16:9</button>
            <button onClick={() => handleAspectChange(undefined)}>
              Свободный масштаб
            </button>

            {/* Слайдер для приближения */}
            <h3>Приближение</h3>
            <input
              type="range"
              min="1"
              max="3"
              step="0.1"
              value={zoom}
              onChange={handleZoomChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  gallery: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "20px",
  } as React.CSSProperties,
  thumbnail: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    cursor: "pointer",
  } as React.CSSProperties,
  editor: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  } as React.CSSProperties,
  controls: {
    marginTop: "20px",
  } as React.CSSProperties,
};

export default PhotoEditor2;
