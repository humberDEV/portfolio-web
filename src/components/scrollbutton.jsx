import { motion } from "framer-motion";

import "../styles/scrollbutton.css";

export default function ScrollButton() {
	return (
		<div className="custom-container">
			<a href="#about">
				<div className="custom-box">
					<motion.div
						animate={{
							y: [0, 24, 0],
						}}
						transition={{
							duration: 1.5,
							repeat: Infinity,
							repeatType: "loop",
						}}
						className="custom-dot"
					/>
				</div>
			</a>
		</div>
	);
}
