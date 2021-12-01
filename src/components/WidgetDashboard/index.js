import React from "react";
import { AllWidgetDashboard } from "./styled";
import Grafico from '../../components/Graficos/GraficoWidget';


function WidgetDashboard(porps) {
  return (
    <AllWidgetDashboard bgIcon={porps.bgIcon}>

      <div className="widget-icon">
        {porps.icon}
      </div>
      <div className="widget-content">
        <div className="widget-content--title">
          <h1>{porps.title}</h1>
          <span>{porps.value}</span>
        </div>
        <div className="widget-content--value">
          <div className="widget-content--value-grafico">
            <Grafico color={porps.bgIcon} />
          </div>
        </div>
      </div>

    </AllWidgetDashboard>
  )
}

export default WidgetDashboard;