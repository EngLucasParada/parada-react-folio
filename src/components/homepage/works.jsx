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
								src="./fitoformula.png"
								alt="fitoformula"
								className="work-image"
							/>
							<div className="work-title">Grupo FitoFórmula</div>
							<div className="work-subtitle">
								Analista de Desenvolvimento
							</div>
							<div className="work-duration">Set de 2023 - Presentㅤㅤㅤ</div>
						</div>

						<div className="work">
							<img
								src="./contrail.png"
								alt="contrail"
								className="work-image"
							/>
							<div className="work-title">Contrail Logística</div>
							<div className="work-subtitle">
								Assistente de Desenvolvimento
							</div>
							<div className="work-duration">Jul de 2023 - Set de 2023ㅤ</div>
						</div>
						<div className="work subordinate">
							<div className="work-subtitle">
								Estagiário de Desenvolvimento
							</div>
							<div className="work-duration">Mai de 2022 - Jul de 2023ㅤ</div>
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
								src="./spa.png"
								alt="spa"
								className="work-image"
							/>
							<div className="work-title">Santos Port Authority</div>
							<div className="work-subtitle">
								Estagiário de Helpdesk
							</div>
							<div className="work-duration">Set de 2021 - Mar de 2022</div>
						</div>
						<div className="work">
							<img
								src="./esamc.png"
								alt="esamc"
								className="work-image"
							/>
							<div className="work-title">ESAMC</div>
							<div className="work-subtitle">
								Assistente Administrativo
							</div>
							<div className="work-duration">Jan de 2020 - Set de 2021</div>
						</div>
						<div className="work">
							<img
								src="./CEA.png"
								alt="CEA"
								className="work-image"
							/>
							<div className="work-title">C&A</div>
							<div className="work-subtitle">
								Consultor de produtos financeiros
							</div>
							<div className="work-duration">Jun de 2019 - Jan de 2020</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
