export default function ImageComponent({alt, src, className}){
	return (
		<img src={src} alt={alt} className={`${className}`}/>
	)
}