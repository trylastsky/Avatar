import { useState } from "react";

import CharacterView from "../components/CharacterView/CharacterView";
import IconButton from "../components/IconButton/IconButton";
//icons
import save from "../assets/icons/svg/save.svg";
import x_icon from "../assets/icons/svg/X.svg";
import refresh_icon from "../assets/icons/svg/refresh.svg";

import hair1 from "../assets/Avatar_components/hairs/hair1.svg";
import hair2 from "../assets/Avatar_components/hairs/hair2.svg";
import hair3 from "../assets/Avatar_components/hairs/hair3.svg";
import hair4 from "../assets/Avatar_components/hairs/hair4.svg";

import hudi from "../assets/Avatar_components/outerwear/hudi.svg";
import tshirt from "../assets/Avatar_components/outerwear/tshirt.svg";

import shorts from "../assets/Avatar_components/pants/shorts.svg";
import jeans from "../assets/Avatar_components/pants/jeans.svg";
import bruki from "../assets/Avatar_components/pants/bruki.svg";
import bridgi from "../assets/Avatar_components/pants/bridgi.svg";

import male_cube from "../assets/icons/svg/male_cube.svg";
import female_cube from "../assets/icons/svg/female_cube.svg";


import "./ConstructorPage.css";

const ConstructorPage: React.FC = () => {
  const [gender, setGender] = useState<string | null>(null); //or female
  const [hair, setHair] = useState<number | null>(null); //прическа
  const [outerwear, setOuterwear] = useState<number | null>(null); //верхняя одежда
  const [pants, setPants] = useState<number | null>(null); //штаны
  const [boots, setBoots] = useState<number | null>(null); // ботинки

  const saveCanvasAsPNG = () => {
    console.log("expect");
    const canvas = document.getElementById("canvas") as HTMLCanvasElement; // Получаем canvas по ID
    if (!canvas) return;

    const dataURL = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "character.png"; // Имя файла
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="container">
        <div className="constuctor-page">
          <div className="avatar-options">
            <div className="ui-bar">
              <h2>Настройки</h2>
              <div className="buttons-container">
                <IconButton
                  icon={save}
                  title="Случайная генерация"
                  width={32}
                  onClick={() => console.log("cлучайная генерация")}
                />
                <IconButton
                  icon={refresh_icon}
                  title="Сбросить настройки"
                  width={32}
                  onClick={() => {
                    setGender("male");
                    setHair(null);
                    setOuterwear(null);
                    setPants(null);
                    setBoots(null);
                  }}
                />
              </div>
            </div>
            <div className="option-case">
              <h3>Пол:</h3>
              <div className="buttons">
                <IconButton
                  icon={male_cube}
                  title="мужской пол"
                  width={64}
                  onClick={() => {
                    setGender("male");
                  }}
                />
                <IconButton
                  icon={female_cube}
                  title="женский пол"
                  width={64}
                  onClick={() => {
                    setGender("female");
                  }}
                />
              </div>
            </div>

            <div className="option-case">
              <h3>Причёски:</h3>
              <div className="buttons">
                <IconButton
                  icon={x_icon}
                  title="Без прически"
                  width={64}
                  onClick={() => {
                    setHair(null);
                  }}
                />
                <IconButton
                  icon={hair1}
                  title="На бок"
                  width={64}
                  onClick={() => {
                    setHair(1);
                  }}
                />
                <IconButton
                  icon={hair2}
                  title="Пробор"
                  width={64}
                  onClick={() => {
                    setHair(2);
                  }}
                />
                <IconButton
                  icon={hair3}
                  title="Косичка"
                  width={64}
                  onClick={() => {
                    setHair(3);
                  }}
                />
                <IconButton
                  icon={hair4}
                  title="Прическа ''Шторы''"
                  width={64}
                  onClick={() => {
                    setHair(4);
                  }}
                />
              </div>
            </div>
            <div className="option-case">
              <h3>Верхняя одежда:</h3>
              <div className="buttons">
                <IconButton
                  icon={x_icon}
                  title="Без одежды"
                  width={64}
                  onClick={() => {
                    setOuterwear(null);
                  }}
                />
                <IconButton
                  icon={hudi}
                  title="Худи"
                  width={64}
                  onClick={() => {
                    setOuterwear(1);
                  }}
                />
                <IconButton
                  icon={tshirt}
                  title="Футболка"
                  width={64}
                  onClick={() => {
                    setOuterwear(2);
                  }}
                />
                <IconButton
                  icon={hudi}
                  title="Худи"
                  width={64}
                  onClick={() => {
                    setOuterwear(3);
                  }}
                />
                <IconButton
                  icon={hudi}
                  title="Худи"
                  width={64}
                  onClick={() => {
                    setOuterwear(4);
                  }}
                />
              </div>
            </div>
            <div className="option-case">
              <h3>Штаны:</h3>
              <div className="buttons">
                <IconButton
                  icon={x_icon}
                  title="Без штанов"
                  width={64}
                  onClick={() => {
                    setPants(null);
                  }}
                />
                <IconButton
                  icon={shorts}
                  title="Шорты"
                  width={64}
                  onClick={() => {
                    setPants(1);
                  }}
                />
                <IconButton
                  icon={jeans}
                  title="Рваные Джинсы"
                  width={64}
                  onClick={() => {
                    setPants(2);
                  }}
                />
                <IconButton
                  icon={bruki}
                  title="Брюки"
                  width={64}
                  onClick={() => {
                    setPants(3);
                  }}
                />
                <IconButton
                  icon={bridgi}
                  title="Бриджи"
                  width={64}
                  onClick={() => {
                    setPants(4);
                  }}
                />
              </div>
            </div>
            <div className="option-case">
              <h3>Обувь:</h3>
              <div className="buttons">
                <IconButton
                  icon={x_icon}
                  title="Без штанов"
                  width={64}
                  onClick={() => {
                    setPants(null);
                  }}
                />
                <IconButton
                  icon={shorts}
                  title="Шорты"
                  width={64}
                  onClick={() => {
                    setPants(1);
                  }}
                />
                <IconButton
                  icon={jeans}
                  title="Рваные Джинсы"
                  width={64}
                  onClick={() => {
                    setPants(2);
                  }}
                />
                <IconButton
                  icon={bruki}
                  title="Брюки"
                  width={64}
                  onClick={() => {
                    setPants(3);
                  }}
                />
                <IconButton
                  icon={bridgi}
                  title="Бриджи"
                  width={64}
                  onClick={() => {
                    setPants(4);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="avatar-view">
            <div className="ui-bar">
              <h2>Персонаж</h2>
              <IconButton title="Сохранить изображение" width={32} icon={save} onClick={saveCanvasAsPNG} />
            </div>
            <div className="view-container">
              <CharacterView
                gender={gender}
                hair={hair}
                outerwear={outerwear}
                pants={pants}
                boots={boots}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConstructorPage;
