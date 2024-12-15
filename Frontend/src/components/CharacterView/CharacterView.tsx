import React, {useRef, useEffect} from "react";
// images

//body
import maleBody from "../../assets/Avatar_components/male/body.svg";
import femaleBody from "../../assets/Avatar_components/female/body.svg";
//hairs
import hair1Image from "../../assets/Avatar_components/hairs/hair1.svg";
import hair2Image from "../../assets/Avatar_components/hairs/hair2.svg";
import hair3Image from "../../assets/Avatar_components/hairs/hair3.svg";
import hair4Image from "../../assets/Avatar_components/hairs/hair4.svg";

//outerwear
import hudiImage from "../../assets/Avatar_components/outerwear/hudi.svg"; //1
import tshirtImage from "../../assets/Avatar_components/outerwear/tshirt.svg"; //2
import bezrykavkaImage from "../../assets/Avatar_components/outerwear/bezrykavka.svg";
import topImage from "../../assets/Avatar_components/outerwear/top.svg";

//pants
import shortsImage from "../../assets/Avatar_components/pants/shorts.svg"; //1
import jeansImage from "../../assets/Avatar_components/pants/jeans.svg"; //2
import brukiImage from "../../assets/Avatar_components/pants/bruki.svg"; //3
import bridgiImage from "../../assets/Avatar_components/pants/bridgi.svg";


//boots 
import sapogiImage from "../../assets/Avatar_components/boots/sapogi.svg";
import sledkiImage from "../../assets/Avatar_components/boots/sledki.svg";
import krossyImage from "../../assets/Avatar_components/boots/krossy.svg";
import tapochkiImage from "../../assets/Avatar_components/boots/tapochki.svg";


import "./CharacterView.css";

interface CharacterCustomizationProps {
	gender: string | null;
	hair: number | null;
	outerwear: number | null;
	pants: number | null;
	boots: number | null;
}

const CharacterView: React.FC<CharacterCustomizationProps> = ({
	gender,
	hair,
	outerwear,
	pants,
	boots,
}) => {
	const scaleFactor = 1;

	const canvasRef = useRef<HTMLCanvasElement>(null);

	const maleBodyImage = new Image();
	const femaleBodyImage = new Image();
	//hairs
	const hair1Img = new Image();
	const hair2Img = new Image();
	const hair3Img = new Image();
	const hair4Img = new Image();
	//outerwear
	const hudiImg = new Image();
	const tshirtImg = new Image();
  const bezrykavkaImg = new Image();
  const topImg = new Image();

	//pants
	const shortsImg = new Image();
	const jeansImg = new Image();
  const brukiImg = new Image();
  const bridgiImg = new Image();

  //boots 
  const sapogiImg = new Image();
  const sledkiImg = new Image();
  const krossyImg = new Image();
  const tapochkiImg = new Image();


	// Загрузка изображений
	useEffect(() => {
		maleBodyImage.src = maleBody;
		femaleBodyImage.src = femaleBody;
		//hairs
		hair1Img.src = hair1Image;
		hair2Img.src = hair2Image;
		hair3Img.src = hair3Image;
		hair4Img.src = hair4Image;
		//outerwear
		hudiImg.src = hudiImage;
		tshirtImg.src = tshirtImage;
    bezrykavkaImg.src = bezrykavkaImage;
    topImg.src = topImage;

		//pants
		shortsImg.src = shortsImage;
		jeansImg.src = jeansImage;
    brukiImg.src = brukiImage;
    bridgiImg.src = bridgiImage;

    //boots
    sapogiImg.src = sapogiImage;
    sledkiImg.src = sledkiImage;
    krossyImg.src = krossyImage;  
    tapochkiImg.src = tapochkiImage;
	});

	const drawCharacter = () => {
		const canvas = canvasRef.current;

		if (!canvas) return;
		const ctx = canvas.getContext("2d");

		if (ctx) {
			// Очищаем холст
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			switch (gender) {
				case "male":
					ctx.drawImage(
						maleBodyImage,
						220,
						65,
						maleBodyImage.width * scaleFactor,
						maleBodyImage.height * scaleFactor
					);
					break;
				case "female":
					ctx.drawImage(
						femaleBodyImage,
						220,
						65,
						maleBodyImage.width * scaleFactor,
						maleBodyImage.height * scaleFactor
					);
					break;
			}

      if (gender) {

        switch (hair) {
          case 0:
            drawCharacter();
            break;
          case 1:
            ctx.drawImage(
              hair1Img,
              262,
              50,
              hair1Img.width * scaleFactor,
              hair1Img.height * scaleFactor
            );
            break;
          case 2:
            ctx.drawImage(
              hair2Img,
              255,
              60,
              hair2Img.width * scaleFactor,
              hair2Img.height * scaleFactor
            );
            break;
          case 3:
            ctx.drawImage(
              hair3Img,
              258,
              40,
              hair3Img.width * scaleFactor,
              hair3Img.height * scaleFactor
            );
            break;
          case 4:
            ctx.drawImage(
              hair4Img,
              260,
              58,
              hair4Img.width * scaleFactor,
              hair4Img.height * scaleFactor
            );
            break;
        }
  
        switch (outerwear) {
          case 0:
            drawCharacter();
            break;
          case 1:
            ctx.drawImage(
              hudiImg,
              220,
              165,
              hudiImg.width * scaleFactor,
              hudiImg.height * scaleFactor
            );
            break;
          case 2:
            ctx.drawImage(
              tshirtImg,
              216,
              160,
              tshirtImg.width * scaleFactor,
              tshirtImg.height * scaleFactor
            );
            break;
          case 3:
            ctx.drawImage(
              bezrykavkaImg,
              252,
              170,
              bezrykavkaImg.width * scaleFactor,
              bezrykavkaImg.height * scaleFactor
            );
            break;
            case 4:
              ctx.drawImage(
                topImg,
                216,
                160,
                topImg.width * scaleFactor,
                topImg.height * scaleFactor
              );
              break;
        }
  
        switch (pants) {
          case 1:
            ctx.drawImage(
              shortsImg,
              244,
              300,
              shortsImg.width * scaleFactor,
              shortsImg.height * scaleFactor
            );
            break;
          case 2:
            ctx.drawImage(
              jeansImg,
              243,
              300,
              jeansImg.width * scaleFactor,
              jeansImg.height * scaleFactor
            );
            break;
          case 3:
              ctx.drawImage(
                brukiImg,
                243,
                300,
                brukiImg.width * scaleFactor,
                brukiImg.height * scaleFactor
              );
              break;
          case 4:
                ctx.drawImage(
                  bridgiImg,
                  244,
                  300,
                  bridgiImg.width * scaleFactor,
                  bridgiImg.height * scaleFactor
                );
                break;
        }

        switch (boots) {
          case 1:
            ctx.drawImage(
              sapogiImg,
              225,
              412,
              sapogiImg.width * scaleFactor,
              sapogiImg.height * scaleFactor
            );
            break;
          case 2:
            ctx.drawImage(
              sledkiImg,
              222,
              496,
              sledkiImg.width * scaleFactor,
              sledkiImg.height * scaleFactor
            );
            break;
          case 3:
              ctx.drawImage(
                krossyImg,
                224,
                487,
                krossyImg.width * scaleFactor,
                krossyImg.height * scaleFactor
              );
              break;
          case 4:
                ctx.drawImage(
                  tapochkiImg,
                  224,
                  498,
                  tapochkiImg.width * scaleFactor,
                  tapochkiImg.height * scaleFactor
                );
                break;
        }
        }
		}
	};

	useEffect(() => {
		drawCharacter();
	}, [gender, hair, outerwear, pants, boots]);

	return (
		<canvas
			id='canvas'
			width={550}
			height={580}
			ref={canvasRef}
		/>
	);
};

export default CharacterView;
