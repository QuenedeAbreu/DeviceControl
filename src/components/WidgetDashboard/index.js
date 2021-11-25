import React from "react";
import { AllWidgetDashboard } from "./styled";


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
          <span>Gráfico</span>
        </div>
      </div>

    </AllWidgetDashboard>
  )
}

export default WidgetDashboard;