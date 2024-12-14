import { useState } from "react";

import CharacterView from "../components/CharacterView/CharacterView";
import IconButton from "../components/IconButton/IconButton";
//icons
import save from "../assets/icons/svg/save.svg";
import x_icon from "../assets/icons/svg/X.svg";

import hair1 from "../assets/Avatar_components/hairs/hair1.svg";
import hair2 from "../assets/Avatar_components/hairs/hair2.svg";
import hair3 from "../assets/Avatar_components/hairs/hair3.svg";
import hair4 from "../assets/Avatar_components/hairs/hair4.svg";

import hudi from "../assets/Avatar_components/outerwear/hudi.svg";
import tshirt from "../assets/Avatar_components/outerwear/tshirt.svg";

import shorts from "../assets/Avatar_components/pants/shorts.svg";
import jeans from "../assets/Avatar_components/pants/jeans.svg";

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
                  onClick={() => console.log("cлучайная генерация")}
                />
                <IconButton
                  icon={save}
                  title="Сбросить настройки"
                  onClick={() => console.log("сбросить настройки")}
                />
              </div>
            </div>
            <div className="option-case">
              <h3>Пол:</h3>
              <div className="buttons">
                <IconButton
                  icon={male_cube}
                  title="мужской пол"
                  onClick={() => {
                    setGender("male");
                  }}
                />
                <IconButton
                  icon={female_cube}
                  title="женский пол"
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
                  onClick={() => {
                    setHair(null);
                  }}
                />
                <IconButton
                  icon={hair1}
                  title="На бок"
                  onClick={() => {
                    setHair(1);
                  }}
                />
                <IconButton
                  icon={hair2}
                  title="Пробор"
                  onClick={() => {
                    setHair(2);
                  }}
                />
                <IconButton
                  icon={hair3}
                  title="Косичка"
                  onClick={() => {
                    setHair(3);
                  }}
                />
                <IconButton
                  icon={hair4}
                  title="Прическа ''Шторы''"
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
                  onClick={() => {
                    setOuterwear(null);
                  }}
                />
                <IconButton
                  icon={hudi}
                  title="Худи"
                  onClick={() => {
                    setOuterwear(1);
                  }}
                />
                <IconButton
                  icon={tshirt}
                  title="Футболка"
                  onClick={() => {
                    setOuterwear(2);
                  }}
                />
                <IconButton
                  icon={hudi}
                  title="Худи"
                  onClick={() => {
                    setOuterwear(3);
                  }}
                />
                <IconButton
                  icon={hudi}
                  title="Худи"
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
                  onClick={() => {
                    setPants(null);
                  }}
                />
                <IconButton
                  icon={shorts}
                  title="Шорты"
                  onClick={() => {
                    setPants(1);
                  }}
                />
                <IconButton
                  icon={jeans}
                  title="Рваные Джинсы"
                  onClick={() => {
                    setPants(2);
                  }}
                />
                <IconButton
                  icon={hudi}
                  title="Худи"
                  onClick={() => {
                    setPants(3);
                  }}
                />
                <IconButton
                  icon={hudi}
                  title="Худи"
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
              <IconButton title="" icon={save} onClick={saveCanvasAsPNG} />
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
