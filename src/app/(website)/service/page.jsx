import Image from "next/image";
import jimage from "@/assets/jimage.jpg";

const onlineImage = "https://images.pexels.com/photos/32179310/pexels-photo-32179310.jpeg"
const ServicePage = async () => {
	console.log(jimage);
	return (
		<div>
			<div>
				<Image src={onlineImage} alt="my image" width={500} height={500} />
			</div>
		</div>
	);
};

export default ServicePage;
