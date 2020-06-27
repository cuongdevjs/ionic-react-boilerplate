/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

import fs from 'fs';
import path from 'path';

export function componentExists(component: string) {
  const components = fs.readdirSync(
    path.join(__dirname, '../../../src/components'),
  );
  return components.indexOf(component) >= 0;
}

export function containerExists(container: string) {
  const containers = fs.readdirSync(
    path.join(__dirname, '../../../src/pages'),
  );
  return containers.indexOf(container) >= 0;
}