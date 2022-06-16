import PropTypes from 'prop-types'
import AuthService from "../services/auth.service";

const RenderOnRole = ({ roles, children }) => (AuthService.hasRole(roles)) ? children : null;

RenderOnRole.propTypes = {
    roles: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default RenderOnRole