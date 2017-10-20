import React from 'react';
import styled from 'react-emotion';
import {withTheme} from 'emotion-theming';

import Link from '../../../components/link';
import SentryTypes from '../../../proptypes';
import recreateRoute from '../../../utils/recreateRoute';

import IconChevronRight from '../../../icons/icon-chevron-right';

class SettingsBreadcrumb extends React.Component {
  static contextTypes = {
    organization: SentryTypes.Organization
  };

  render() {
    let {routes, params} = this.props;
    let routesWithNames = routes.filter(({name}) => name);
    let lastRouteIndex = routesWithNames.length - 1;
    return (
      <Breadcrumbs>
        {routesWithNames.map((route, i) => {
          let isLast = i === lastRouteIndex;
          return (
            <span key={route.name}>
              <Crumb to={recreateRoute(route, {routes, params})}>
                {route.name}
              </Crumb>
              {!isLast && <Divider><IconChevronRight size="15" /></Divider>}
            </span>
          );
        })}
      </Breadcrumbs>
    );
  }
}

const Breadcrumbs = withTheme(
  styled.div`
    display: flex;
    align-items: center;
  `
);

const Crumb = withTheme(
  styled(Link)`
    font-size: 18px;
    color: ${p => p.theme.gray3};
    margin-right: 10px;
    cursor: pointer;

    &:hover {
      color: ${p => p.theme.gray5};
    }
  `
);

const Divider = withTheme(
  styled.span`
    margin-right: 10px;
    color: ${p => p.theme.gray1};
    position: relative;
    top: -1px;
  `
);

export default SettingsBreadcrumb;
