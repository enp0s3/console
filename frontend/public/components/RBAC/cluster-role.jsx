import React from 'react';

import {register} from '../react-wrapper';
import {makeList, TwoColumns} from '../factory';
import {RowOfKind, RoleHeader, RoleDetails} from './role';

const Roles = makeList('Roles', 'clusterrole', RoleHeader, RowOfKind('clusterrole'));

const Details = (selected) => {
  if (!_.isEmpty(selected)) {
    return <RoleDetails {...selected} />;
  }
  return <div className="empty-page">
    <h1 className="empty-page__header">No Cluster Role selected</h1>
    <p className="empty-page__explanation">
      Cluster Roles grant access to types of objects in any namespace in the cluster.  Cluster Roles are applied to a group or user via a Cluster Role Binding.
    </p>
  </div>;
};

export const ClusterRolesPage = () => <TwoColumns list={Roles}>
  <Details />
</TwoColumns>;

register('ClusterRolesPage', ClusterRolesPage);
