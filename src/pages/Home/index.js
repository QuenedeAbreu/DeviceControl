import React from 'react';
import { All } from './style';
import WidgetDashboard from '../../components/WidgetDashboard';
import PageAll from '../../components/partials/PageAll';
import { RiComputerLine } from "react-icons/ri";
import { FaUserAstronaut } from "react-icons/fa";
function page() {
  const widgetsIfons = [
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
          <div className="container--Body--widget">
            {widgetsIfons.map(widget => (
              <WidgetDashboard key={widget.id} {...widget} />
            ))}

          </div>
          <h1>page Home</h1>
        </div>

      </All>
    </PageAll>
  );
}

export default page;