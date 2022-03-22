import React from 'react';
import { All } from './style';
import WidgetDashboard from '../../components/WidgetDashboard';
import PageAll from '../../components/partials/PageAll';
import { RiComputerLine } from "react-icons/ri";
import { FaUserAstronaut } from "react-icons/fa";
import GraficoLine from '../../components/Graficos/GraficoLineDashBoard';
import GraficoCicle from '../../components/Graficos/GraficoCicloDashBoard';
// import GraficoCicleWidget from '../../components/Graficos/GraficoCicloWidgetDashBoard';


function page() {
  const widgetsInfos = [
    {
      id: 0,
      title: 'Computadores',
      icon: <RiComputerLine />,
      value: '1000',
      bgIcon: '#f5365c',
    },
    {
      id: 1,
      title: 'Usuários',
      icon: <FaUserAstronaut />,
      value: '50',
      bgIcon: '#25d398',
    }
  ]


  return (
    <PageAll>
      <All>

        <div className="container--Body">

          <div className="container--Body--Title">
            <h1>Dashboard</h1>
          </div>

          <div className="container--Body--widget">
            {widgetsInfos.map(widget => (
              <WidgetDashboard key={widget.id} {...widget} />
            ))}
          </div>
          {/* Graficos */}
          <div className="container--Body--graphics">
            {/* Linha 1 graficos */}
            <div className="container--Body--graphics--row">
              <div className='container--Body--graphics--content'>
                <div className='container--Body--graphics--content--title'>
                  <h1>Computadores</h1>
                </div>
                <div className='container--Body--graphics--content-in'>
                  <GraficoLine />
                </div>
              </div>

              <div className='container--Body--graphics--content'>
                <div className='container--Body--graphics--content--title'>
                  <h1>Concerto por Bloco</h1>
                </div>
                <GraficoCicle />
              </div>
            </div>
          </div>
        </div>

      </All>
    </PageAll>
  );
}

export default page;