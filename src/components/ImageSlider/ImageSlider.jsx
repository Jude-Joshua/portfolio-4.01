import { useState, useRef } from "react";
import "./ImageSlider.scss";

import ImageComponent from "../ImageComponent/ImageComponent";
import { CameraIcon, SneakerMoveIcon, PawPrintIcon, MicrophoneStageIcon, RainbowCloudIcon } from '@phosphor-icons/react';


import Pet from '../../assets/images/pet.webp';
import Photography from '../../assets/images/photography.webp';
import Sports from '../../assets/images/sports.webp';
import Outside from '../../assets/images/outside.webp';
import Speaker from '../../assets/images/speaker.webp';

const slides = [{ image: Pet }, { image: Photography }, { image: Sports }, { image: Outside }, { image: Speaker }];

function SlideContent({ slide }) {
	return (
		<ImageComponent alt={''} className={'content-image'} src={slide.image} />
	);
}

export default function ImageSlider() {
	const [current, setCurrent] = useState(0);
	const [prev, setPrev] = useState(null);
	const [animating, setAnimating] = useState(false);
	const timeoutRef = useRef(null);
	const [activeIndex, setActiveIndex] = useState(0);

	const goTo = (index) => {
		if (animating || index === current) return;
		clearTimeout(timeoutRef.current);
		setPrev(current);
		setCurrent(index);
		setAnimating(true);
		setActiveIndex(index);
		timeoutRef.current = setTimeout(() => {
			setPrev(null);
			setAnimating(false);
		}, 520);
	};

	const slide = slides[current];
	const prevSlide = prev !== null ? slides[prev] : null;

	return (
		<div className="slider-wrapper flex flex-col justify-center items-center">

			<div className="content">
				{prevSlide && (
					<div className="slide slide--prev">
						<SlideContent slide={prevSlide} />
					</div>
				)}
				<div
					key={current}
					className={`slide slide--current${animating ? " is-animating" : ""}`}
				>
					<SlideContent slide={slide} />
				</div>
			</div>

			<div className="pagination flex justify-between items-center">
				<span className={`pagination-icon ${activeIndex === 0 ? 'active' : ''}`} onClick={() => goTo(0)}><PawPrintIcon weight={'light'} size={40} /></span>
				<span className={`pagination-icon ${activeIndex === 1 ? 'active' : ''}`} onClick={() => goTo(1)}><CameraIcon weight={'light'} size={40} /></span>
				<span className={`pagination-icon ${activeIndex === 2 ? 'active' : ''}`} onClick={() => goTo(2)}><SneakerMoveIcon weight={'light'} size={40} /></span>
				<span className={`pagination-icon ${activeIndex === 3 ? 'active' : ''}`} onClick={() => goTo(3)}><RainbowCloudIcon weight={'light'} size={40} /></span>
				<span className={`pagination-icon ${activeIndex === 4 ? 'active' : ''}`} onClick={() => goTo(4)}><MicrophoneStageIcon weight={'light'} size={40} /></span>
			</div>

		</div>
	);
}
