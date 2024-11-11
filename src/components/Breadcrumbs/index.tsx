import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';

export const Breadcrumbs = () => {
  const { pathname } = useLocation();

  // Split and filter out empty crumbs
  const pathSegments = pathname.split('/').filter(Boolean);

  // Map each path segment to a breadcrumb link
  const crumbs = pathSegments.map((segment, index) => {
    // Construct the link for each segment
    const linkPath = `/${pathSegments.slice(0, index + 1).join('/')}`;

    // Replace underscores with spaces and capitalize the first letter
    const formattedCrumb = segment.replace(/_/g, ' ');
    const uppercasedCrumb =
      formattedCrumb.charAt(0).toUpperCase() + formattedCrumb.slice(1);

    return (
      <Link key={segment} to={linkPath}>
        {uppercasedCrumb}
      </Link>
    );
  });

  return (
    <div className={styles.breadcrumbs}>
      {/* Always show 'Home' as the first breadcrumb */}
      <Link to="/">Home</Link>
      {crumbs}
    </div>
  );
};
