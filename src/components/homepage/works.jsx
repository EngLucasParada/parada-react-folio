import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./facebook.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Grupo FitoFórmula</div>
							<div className="work-subtitle">
								Analista de Desenvolvimento
							</div>
							<div className="work-duration">Set de 2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Contrail Logística</div>
							<div className="work-subtitle">
								Assistente de Desenvolvimento
							</div>
							<div className="work-duration">Jul de 2023 - Set de 2023</div>
						</div>
						<div className="work subordinate">
							<div className="work-subtitle">
								Estagiário de Desenvolvimento
							</div>
							<div className="work-duration">Mai de 2023 - Jul de 2023</div>
						</div>
						<p></p>
						<div className="work">
							<img
								src="./bradesco.png"
								alt="bradesco"
								className="work-image"
							/>
							<div className="work-title">Bradesco</div>
							<div className="work-subtitle">
								Estagiário de BI e Inovação
							</div>
							<div className="work-duration">Mar de 2022 - Mai de 2022</div>
						</div>
						<div className="work">
							<img
								src="./facebook.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Bradesco</div>
							<div className="work-subtitle">
								Estagiário de BI e Inovação
							</div>
							<div className="work-duration">Mar de 2022 - Mai de 2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
