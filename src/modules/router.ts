import StudentsRoutes from './students/services/routes'
import RosterRoutes from './documents/roster/services/routes'

export default [
    ...StudentsRoutes,
    ...RosterRoutes,
]
