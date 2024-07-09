import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import c from './Breadcrumbs.module.scss';

export const Breadcrumbs = () => {
  const location = useLocation();

  let currentLink = '';
  let isHomeCrumb = true;

  const crumbs = location.pathname
    .split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
      currentLink += `/${crumb}`;
      const uppercasedCrumb = `${crumb.charAt(0).toUpperCase()}${crumb.slice(1)}`;

      if (isHomeCrumb && currentLink[0] === '/') {
        isHomeCrumb = false;
        return (
          <React.Fragment key={crumb}>
            <Link to="/">Home</Link>
            <Link to={currentLink}>{uppercasedCrumb}</Link>
          </React.Fragment>
        );
      } else {
        return (
          <Link key={crumb} to={currentLink}>
            {uppercasedCrumb}
          </Link>
        );
      }
    });

  return <div className={c.breadcrumbs}>{crumbs}</div>;
};
