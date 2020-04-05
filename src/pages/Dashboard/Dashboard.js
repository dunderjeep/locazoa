import Button from '@material-ui/core/Button'
import { Activity } from 'rmw-shell'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import { withFirebase } from 'firekit-provider'
import { withTheme } from '@material-ui/core/styles'
import Scrollbar from 'rmw-shell/lib/components/Scrollbar'

class Dashboard extends Component {
  componentDidMount() {
    const { watchPath } = this.props
  }

  render() {
    const { theme, intl } = this.props

    return (
      <Activity>
        <Scrollbar>
        <svg width="700" height="432" viewBox="0 0 700 432" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="700" height="432" fill="white"/>
<path d="M181.192 186.416L173.8 184.592V179.12H193.384V246.704L200.776 248.528V254H173.8V248.528L181.192 246.704V186.416ZM256.472 228.08C256.472 232.176 255.864 236.048 254.648 239.696C253.496 243.28 251.8 246.288 249.56 248.72C247.448 250.96 244.92 252.56 241.976 253.52C239.032 254.48 235.544 254.96 231.512 254.96C227.48 254.96 223.992 254.48 221.048 253.52C218.104 252.56 215.576 250.96 213.464 248.72C211.224 246.288 209.496 243.28 208.28 239.696C207.128 236.048 206.552 232.176 206.552 228.08C206.552 223.984 207.128 220.144 208.28 216.56C209.496 212.912 211.224 209.872 213.464 207.44C215.576 205.2 218.104 203.6 221.048 202.64C223.992 201.68 227.48 201.2 231.512 201.2C235.544 201.2 239.032 201.68 241.976 202.64C244.92 203.6 247.448 205.2 249.56 207.44C251.8 209.872 253.496 212.912 254.648 216.56C255.864 220.144 256.472 223.984 256.472 228.08ZM222.776 244.688C224.504 247.248 227.416 248.528 231.512 248.528C235.608 248.528 238.52 247.248 240.248 244.688C242.296 241.552 243.32 236.016 243.32 228.08C243.32 220.144 242.296 214.608 240.248 211.472C238.52 208.912 235.608 207.632 231.512 207.632C227.416 207.632 224.504 208.912 222.776 211.472C220.728 214.608 219.704 220.144 219.704 228.08C219.704 236.016 220.728 241.552 222.776 244.688ZM288.8 201.2C291.744 201.2 294.464 201.552 296.96 202.256C299.456 202.96 301.6 203.984 303.392 205.328C305.248 206.608 306.688 208.176 307.712 210.032C308.736 211.888 309.248 213.936 309.248 216.176C309.248 219.056 308.48 221.264 306.944 222.8C305.408 224.272 303.52 225.008 301.28 225.008C300 225.008 298.944 224.816 298.112 224.432C297.28 223.984 296.576 223.44 296 222.8C295.488 222.096 295.104 221.328 294.848 220.496C294.656 219.664 294.56 218.832 294.56 218C294.56 216.4 294.944 215.024 295.712 213.872C296.544 212.72 297.76 211.888 299.36 211.376C298.464 210.224 297.12 209.296 295.328 208.592C293.536 207.888 291.52 207.536 289.28 207.536C287.232 207.536 285.408 207.888 283.808 208.592C282.272 209.296 280.96 210.448 279.872 212.048C278.784 213.584 277.952 215.664 277.376 218.288C276.8 220.848 276.512 224.016 276.512 227.792C276.512 231.248 276.736 233.968 277.184 235.952C277.632 237.936 278.24 239.664 279.008 241.136C280.032 242.992 281.344 244.464 282.944 245.552C284.544 246.576 286.592 247.088 289.088 247.088C290.368 247.088 291.712 246.928 293.12 246.608C294.592 246.288 296 245.84 297.344 245.264C298.752 244.624 300.064 243.824 301.28 242.864C302.56 241.904 303.68 240.752 304.64 239.408L309.824 243.44C306.816 247.6 303.328 250.576 299.36 252.368C295.456 254.096 291.264 254.96 286.784 254.96C281.984 254.96 277.952 254.064 274.688 252.272C271.424 250.416 268.864 247.728 267.008 244.208C265.92 242.16 265.056 239.824 264.416 237.2C263.84 234.512 263.552 231.632 263.552 228.56C263.552 224.4 264.128 220.656 265.28 217.328C266.432 213.936 268.064 211.056 270.176 208.688C272.352 206.256 275.008 204.4 278.144 203.12C281.28 201.84 284.832 201.2 288.8 201.2ZM315.286 242.672C315.286 240.048 315.862 237.744 317.014 235.76C318.23 233.712 320.054 231.92 322.486 230.384C324.982 228.848 328.118 227.536 331.894 226.448C335.734 225.36 340.278 224.4 345.526 223.568C345.206 220.368 344.822 217.936 344.374 216.272C343.99 214.544 343.446 213.04 342.742 211.76C341.846 210.288 340.79 209.104 339.574 208.208C338.422 207.312 336.918 206.864 335.062 206.864C333.718 206.864 332.47 207.12 331.318 207.632C330.23 208.144 329.494 208.848 329.11 209.744C330.006 210.256 330.614 210.992 330.934 211.952C331.318 212.848 331.51 213.648 331.51 214.352C331.51 215.952 330.806 217.392 329.398 218.672C327.99 219.888 326.294 220.496 324.31 220.496C322.262 220.496 320.662 219.856 319.51 218.576C318.422 217.232 317.878 215.568 317.878 213.584C317.878 211.6 318.422 209.84 319.51 208.304C320.598 206.768 322.038 205.488 323.83 204.464C325.622 203.376 327.606 202.576 329.782 202.064C332.022 201.488 334.262 201.2 336.502 201.2C339.51 201.2 342.198 201.648 344.566 202.544C346.998 203.376 348.95 204.432 350.422 205.712C355.478 210.192 358.006 217.296 358.006 227.024V239.504C358.006 242.704 358.198 244.912 358.582 246.128C359.03 247.28 359.958 247.856 361.366 247.856H365.686V252.176C359.798 254.032 355.35 254.96 352.342 254.96C351.254 254.96 350.358 254.8 349.654 254.48C349.014 254.16 348.502 253.616 348.118 252.848C347.734 252.08 347.446 251.024 347.254 249.68C347.126 248.336 347.062 246.608 347.062 244.496H346.678C344.694 247.76 342.07 250.32 338.806 252.176C335.542 254.032 332.022 254.96 328.246 254.96C324.214 254.96 321.046 253.872 318.742 251.696C316.438 249.52 315.286 246.512 315.286 242.672ZM334.102 247.952C335.446 247.952 336.918 247.536 338.518 246.704C340.182 245.808 341.622 244.528 342.838 242.864C343.542 241.968 344.214 240.688 344.854 239.024C345.494 237.36 345.814 235.376 345.814 233.072C345.814 232.304 345.782 231.472 345.718 230.576C345.654 229.616 345.558 228.688 345.43 227.792C342.102 228.496 339.318 229.264 337.078 230.096C334.902 230.864 333.142 231.728 331.798 232.688C330.454 233.648 329.494 234.768 328.918 236.048C328.342 237.264 328.054 238.672 328.054 240.272C328.054 243.088 328.694 245.072 329.974 246.224C331.254 247.376 332.63 247.952 334.102 247.952ZM405.894 234.128H414.246V254H368.838V247.184L398.886 208.976H380.742L378.438 221.552H370.086V202.16H413.862V208.976L383.91 247.184H403.974L405.894 234.128ZM472.097 228.08C472.097 232.176 471.489 236.048 470.273 239.696C469.121 243.28 467.425 246.288 465.185 248.72C463.073 250.96 460.545 252.56 457.601 253.52C454.657 254.48 451.169 254.96 447.137 254.96C443.105 254.96 439.617 254.48 436.673 253.52C433.729 252.56 431.201 250.96 429.089 248.72C426.849 246.288 425.121 243.28 423.905 239.696C422.753 236.048 422.177 232.176 422.177 228.08C422.177 223.984 422.753 220.144 423.905 216.56C425.121 212.912 426.849 209.872 429.089 207.44C431.201 205.2 433.729 203.6 436.673 202.64C439.617 201.68 443.105 201.2 447.137 201.2C451.169 201.2 454.657 201.68 457.601 202.64C460.545 203.6 463.073 205.2 465.185 207.44C467.425 209.872 469.121 212.912 470.273 216.56C471.489 220.144 472.097 223.984 472.097 228.08ZM438.401 244.688C440.129 247.248 443.041 248.528 447.137 248.528C451.233 248.528 454.145 247.248 455.873 244.688C457.921 241.552 458.945 236.016 458.945 228.08C458.945 220.144 457.921 214.608 455.873 211.472C454.145 208.912 451.233 207.632 447.137 207.632C443.041 207.632 440.129 208.912 438.401 211.472C436.353 214.608 435.329 220.144 435.329 228.08C435.329 236.016 436.353 241.552 438.401 244.688ZM478.505 242.672C478.505 240.048 479.081 237.744 480.233 235.76C481.449 233.712 483.273 231.92 485.705 230.384C488.201 228.848 491.337 227.536 495.113 226.448C498.953 225.36 503.497 224.4 508.745 223.568C508.425 220.368 508.041 217.936 507.593 216.272C507.209 214.544 506.665 213.04 505.961 211.76C505.065 210.288 504.009 209.104 502.793 208.208C501.641 207.312 500.137 206.864 498.281 206.864C496.937 206.864 495.689 207.12 494.537 207.632C493.449 208.144 492.713 208.848 492.329 209.744C493.225 210.256 493.833 210.992 494.153 211.952C494.537 212.848 494.729 213.648 494.729 214.352C494.729 215.952 494.025 217.392 492.617 218.672C491.209 219.888 489.513 220.496 487.529 220.496C485.481 220.496 483.881 219.856 482.729 218.576C481.641 217.232 481.097 215.568 481.097 213.584C481.097 211.6 481.641 209.84 482.729 208.304C483.817 206.768 485.257 205.488 487.049 204.464C488.841 203.376 490.825 202.576 493.001 202.064C495.241 201.488 497.481 201.2 499.721 201.2C502.729 201.2 505.417 201.648 507.785 202.544C510.217 203.376 512.169 204.432 513.641 205.712C518.697 210.192 521.225 217.296 521.225 227.024V239.504C521.225 242.704 521.417 244.912 521.801 246.128C522.249 247.28 523.177 247.856 524.585 247.856H528.905V252.176C523.017 254.032 518.569 254.96 515.561 254.96C514.473 254.96 513.577 254.8 512.873 254.48C512.233 254.16 511.721 253.616 511.337 252.848C510.953 252.08 510.665 251.024 510.473 249.68C510.345 248.336 510.281 246.608 510.281 244.496H509.897C507.913 247.76 505.289 250.32 502.025 252.176C498.761 254.032 495.241 254.96 491.465 254.96C487.433 254.96 484.265 253.872 481.961 251.696C479.657 249.52 478.505 246.512 478.505 242.672ZM497.321 247.952C498.665 247.952 500.137 247.536 501.737 246.704C503.401 245.808 504.841 244.528 506.057 242.864C506.761 241.968 507.433 240.688 508.073 239.024C508.713 237.36 509.033 235.376 509.033 233.072C509.033 232.304 509.001 231.472 508.937 230.576C508.873 229.616 508.777 228.688 508.649 227.792C505.321 228.496 502.537 229.264 500.297 230.096C498.121 230.864 496.361 231.728 495.017 232.688C493.673 233.648 492.713 234.768 492.137 236.048C491.561 237.264 491.273 238.672 491.273 240.272C491.273 243.088 491.913 245.072 493.193 246.224C494.473 247.376 495.849 247.952 497.321 247.952Z" fill="black"/>
<path d="M210.614 308.324L213.136 307.96L213.474 304.684L215.658 304.372V307.96H218.986V309.26H215.658V318.542C215.658 319.131 215.667 319.539 215.684 319.764C215.701 319.972 215.736 320.145 215.788 320.284C215.84 320.423 215.935 320.509 216.074 320.544C216.213 320.579 216.438 320.596 216.75 320.596H218.57V321.35C217.738 321.662 217.001 321.887 216.36 322.026C215.736 322.182 215.233 322.26 214.852 322.26C214.072 322.26 213.569 321.939 213.344 321.298C213.257 321.09 213.197 320.83 213.162 320.518C213.145 320.189 213.136 319.695 213.136 319.036V309.26H210.614V308.324ZM230.889 314.642C230.889 313.533 230.855 312.701 230.785 312.146C230.733 311.574 230.629 311.132 230.473 310.82C230.04 309.971 229.277 309.546 228.185 309.546C227.7 309.546 227.232 309.633 226.781 309.806C226.331 309.979 225.932 310.213 225.585 310.508C225.204 310.855 224.918 311.253 224.727 311.704C224.554 312.155 224.45 312.718 224.415 313.394V320.44L226.157 320.934V322H219.891V320.934L221.893 320.44V303.28L219.891 302.786V301.72H224.415V310.404C224.935 309.572 225.62 308.913 226.469 308.428C227.336 307.943 228.263 307.7 229.251 307.7C229.945 307.7 230.569 307.821 231.123 308.064C231.678 308.307 232.12 308.653 232.449 309.104C232.796 309.589 233.039 310.274 233.177 311.158C233.333 312.025 233.411 313.203 233.411 314.694V320.44L235.413 320.934V322H229.147V320.934L230.889 320.44V314.642ZM239.822 315.136C239.822 316.401 239.995 317.45 240.342 318.282C240.688 319.097 241.174 319.677 241.798 320.024C242.439 320.353 243.141 320.518 243.904 320.518C244.736 320.518 245.481 320.353 246.14 320.024C246.816 319.677 247.422 319.209 247.96 318.62L248.792 319.244C248.48 319.66 248.142 320.05 247.778 320.414C247.431 320.778 247.032 321.099 246.582 321.376C246.131 321.653 245.628 321.87 245.074 322.026C244.519 322.182 243.904 322.26 243.228 322.26C242.032 322.26 240.974 322.009 240.056 321.506C239.137 320.986 238.435 320.232 237.95 319.244C237.69 318.707 237.499 318.117 237.378 317.476C237.256 316.817 237.196 316.107 237.196 315.344C237.196 312.9 237.75 311.019 238.86 309.702C239.969 308.367 241.494 307.7 243.436 307.7C245.221 307.7 246.59 308.255 247.544 309.364C248.497 310.456 248.974 311.973 248.974 313.914C248.974 314.087 248.965 314.252 248.948 314.408C248.948 314.547 248.93 314.789 248.896 315.136H239.822ZM243.28 309.104C241.2 309.104 240.056 310.69 239.848 313.862H246.348V313.004C246.348 311.756 246.079 310.794 245.542 310.118C245.022 309.442 244.268 309.104 243.28 309.104ZM260.566 315.136C260.566 316.401 260.739 317.45 261.086 318.282C261.432 319.097 261.918 319.677 262.542 320.024C263.183 320.353 263.885 320.518 264.648 320.518C265.48 320.518 266.225 320.353 266.884 320.024C267.56 319.677 268.166 319.209 268.704 318.62L269.536 319.244C269.224 319.66 268.886 320.05 268.522 320.414C268.175 320.778 267.776 321.099 267.326 321.376C266.875 321.653 266.372 321.87 265.818 322.026C265.263 322.182 264.648 322.26 263.972 322.26C262.776 322.26 261.718 322.009 260.8 321.506C259.881 320.986 259.179 320.232 258.694 319.244C258.434 318.707 258.243 318.117 258.122 317.476C258 316.817 257.94 316.107 257.94 315.344C257.94 312.9 258.494 311.019 259.604 309.702C260.713 308.367 262.238 307.7 264.18 307.7C265.965 307.7 267.334 308.255 268.288 309.364C269.241 310.456 269.718 311.973 269.718 313.914C269.718 314.087 269.709 314.252 269.692 314.408C269.692 314.547 269.674 314.789 269.64 315.136H260.566ZM264.024 309.104C261.944 309.104 260.8 310.69 260.592 313.862H267.092V313.004C267.092 311.756 266.823 310.794 266.286 310.118C265.766 309.442 265.012 309.104 264.024 309.104ZM271.848 318.958C271.848 318.282 271.996 317.684 272.29 317.164C272.602 316.644 273.088 316.185 273.746 315.786C274.405 315.37 275.254 315.015 276.294 314.72C277.334 314.425 278.582 314.165 280.038 313.94C279.952 312.917 279.848 312.12 279.726 311.548C279.622 310.976 279.475 310.517 279.284 310.17C279.042 309.719 278.704 309.39 278.27 309.182C277.837 308.957 277.369 308.844 276.866 308.844C276.381 308.844 275.939 308.931 275.54 309.104C275.159 309.277 274.899 309.511 274.76 309.806C275.003 309.997 275.176 310.231 275.28 310.508C275.402 310.768 275.462 311.019 275.462 311.262C275.462 311.695 275.315 312.042 275.02 312.302C274.743 312.545 274.396 312.666 273.98 312.666C273.564 312.666 273.218 312.527 272.94 312.25C272.68 311.973 272.55 311.583 272.55 311.08C272.55 310.543 272.698 310.066 272.992 309.65C273.287 309.217 273.668 308.861 274.136 308.584C274.622 308.289 275.159 308.073 275.748 307.934C276.355 307.778 276.953 307.7 277.542 307.7C279.016 307.7 280.177 308.125 281.026 308.974C282.101 310.049 282.638 311.955 282.638 314.694V318.464C282.638 319.331 282.69 319.929 282.794 320.258C282.916 320.57 283.167 320.726 283.548 320.726H284.718V321.506C283.47 322.009 282.5 322.26 281.806 322.26C281.546 322.26 281.33 322.217 281.156 322.13C280.983 322.043 280.844 321.896 280.74 321.688C280.636 321.463 280.558 321.168 280.506 320.804C280.472 320.44 280.454 319.981 280.454 319.426H280.35C279.813 320.31 279.102 321.003 278.218 321.506C277.334 322.009 276.381 322.26 275.358 322.26C274.266 322.26 273.408 321.974 272.784 321.402C272.16 320.813 271.848 319.998 271.848 318.958ZM276.45 320.752C276.936 320.752 277.438 320.631 277.958 320.388C278.496 320.128 278.946 319.773 279.31 319.322C279.848 318.663 280.116 317.693 280.116 316.41C280.116 316.115 280.108 315.829 280.09 315.552C280.073 315.257 280.047 314.98 280.012 314.72C278.955 314.928 278.071 315.145 277.36 315.37C276.667 315.595 276.104 315.855 275.67 316.15C275.254 316.427 274.96 316.757 274.786 317.138C274.613 317.502 274.526 317.927 274.526 318.412C274.526 319.157 274.691 319.738 275.02 320.154C275.367 320.553 275.844 320.752 276.45 320.752ZM291.169 321.064C292.157 321.064 292.955 320.873 293.561 320.492C294.168 320.093 294.471 319.53 294.471 318.802C294.471 318.369 294.359 318.005 294.133 317.71C293.908 317.415 293.613 317.164 293.249 316.956C292.903 316.748 292.504 316.575 292.053 316.436C291.62 316.28 291.195 316.141 290.779 316.02C290.242 315.864 289.713 315.682 289.193 315.474C288.691 315.266 288.231 315.006 287.815 314.694C287.417 314.365 287.096 313.975 286.853 313.524C286.611 313.056 286.489 312.493 286.489 311.834C286.489 310.586 286.94 309.589 287.841 308.844C288.76 308.081 290.034 307.7 291.663 307.7C293.05 307.7 294.142 307.995 294.939 308.584C295.754 309.156 296.161 309.945 296.161 310.95C296.161 311.505 296.04 311.938 295.797 312.25C295.555 312.562 295.208 312.718 294.757 312.718C294.359 312.718 294.029 312.597 293.769 312.354C293.509 312.111 293.379 311.799 293.379 311.418C293.379 311.089 293.466 310.794 293.639 310.534C293.813 310.257 294.038 310.057 294.315 309.936C294.055 309.572 293.717 309.312 293.301 309.156C292.903 308.983 292.383 308.896 291.741 308.896C289.661 308.896 288.621 309.633 288.621 311.106C288.621 311.505 288.691 311.834 288.829 312.094C288.968 312.354 289.176 312.579 289.453 312.77C289.731 312.961 290.069 313.134 290.467 313.29C290.883 313.429 291.36 313.585 291.897 313.758C292.487 313.949 293.067 314.148 293.639 314.356C294.211 314.564 294.723 314.824 295.173 315.136C295.641 315.448 296.014 315.838 296.291 316.306C296.586 316.774 296.733 317.355 296.733 318.048C296.733 318.724 296.595 319.322 296.317 319.842C296.04 320.362 295.65 320.804 295.147 321.168C294.645 321.515 294.047 321.783 293.353 321.974C292.66 322.165 291.897 322.26 291.065 322.26C289.523 322.26 288.283 321.957 287.347 321.35C286.429 320.726 285.969 319.877 285.969 318.802C285.969 318.247 286.091 317.814 286.333 317.502C286.593 317.173 286.957 317.008 287.425 317.008C287.841 317.008 288.188 317.129 288.465 317.372C288.76 317.615 288.907 317.935 288.907 318.334C288.907 318.663 288.812 318.975 288.621 319.27C288.448 319.565 288.231 319.781 287.971 319.92C288.197 320.267 288.595 320.544 289.167 320.752C289.757 320.96 290.424 321.064 291.169 321.064ZM298.837 309.026V307.96H303.361V320.44L305.363 320.934V322H298.837V320.934L300.839 320.44V309.52L298.837 309.026ZM300.475 303.774C300.475 303.271 300.614 302.873 300.891 302.578C301.186 302.283 301.585 302.136 302.087 302.136C302.59 302.136 302.989 302.283 303.283 302.578C303.578 302.873 303.725 303.271 303.725 303.774C303.725 304.277 303.578 304.675 303.283 304.97C302.989 305.247 302.59 305.386 302.087 305.386C301.585 305.386 301.186 305.247 300.891 304.97C300.614 304.675 300.475 304.277 300.475 303.774ZM309.849 315.136C309.849 316.401 310.022 317.45 310.369 318.282C310.716 319.097 311.201 319.677 311.825 320.024C312.466 320.353 313.168 320.518 313.931 320.518C314.763 320.518 315.508 320.353 316.167 320.024C316.843 319.677 317.45 319.209 317.987 318.62L318.819 319.244C318.507 319.66 318.169 320.05 317.805 320.414C317.458 320.778 317.06 321.099 316.609 321.376C316.158 321.653 315.656 321.87 315.101 322.026C314.546 322.182 313.931 322.26 313.255 322.26C312.059 322.26 311.002 322.009 310.083 321.506C309.164 320.986 308.462 320.232 307.977 319.244C307.717 318.707 307.526 318.117 307.405 317.476C307.284 316.817 307.223 316.107 307.223 315.344C307.223 312.9 307.778 311.019 308.887 309.702C309.996 308.367 311.522 307.7 313.463 307.7C315.248 307.7 316.618 308.255 317.571 309.364C318.524 310.456 319.001 311.973 319.001 313.914C319.001 314.087 318.992 314.252 318.975 314.408C318.975 314.547 318.958 314.789 318.923 315.136H309.849ZM313.307 309.104C311.227 309.104 310.083 310.69 309.875 313.862H316.375V313.004C316.375 311.756 316.106 310.794 315.569 310.118C315.049 309.442 314.295 309.104 313.307 309.104ZM326.488 321.064C327.476 321.064 328.273 320.873 328.88 320.492C329.486 320.093 329.79 319.53 329.79 318.802C329.79 318.369 329.677 318.005 329.452 317.71C329.226 317.415 328.932 317.164 328.568 316.956C328.221 316.748 327.822 316.575 327.372 316.436C326.938 316.28 326.514 316.141 326.098 316.02C325.56 315.864 325.032 315.682 324.512 315.474C324.009 315.266 323.55 315.006 323.134 314.694C322.735 314.365 322.414 313.975 322.172 313.524C321.929 313.056 321.808 312.493 321.808 311.834C321.808 310.586 322.258 309.589 323.16 308.844C324.078 308.081 325.352 307.7 326.982 307.7C328.368 307.7 329.46 307.995 330.258 308.584C331.072 309.156 331.48 309.945 331.48 310.95C331.48 311.505 331.358 311.938 331.116 312.25C330.873 312.562 330.526 312.718 330.076 312.718C329.677 312.718 329.348 312.597 329.088 312.354C328.828 312.111 328.698 311.799 328.698 311.418C328.698 311.089 328.784 310.794 328.958 310.534C329.131 310.257 329.356 310.057 329.634 309.936C329.374 309.572 329.036 309.312 328.62 309.156C328.221 308.983 327.701 308.896 327.06 308.896C324.98 308.896 323.94 309.633 323.94 311.106C323.94 311.505 324.009 311.834 324.148 312.094C324.286 312.354 324.494 312.579 324.772 312.77C325.049 312.961 325.387 313.134 325.786 313.29C326.202 313.429 326.678 313.585 327.216 313.758C327.805 313.949 328.386 314.148 328.958 314.356C329.53 314.564 330.041 314.824 330.492 315.136C330.96 315.448 331.332 315.838 331.61 316.306C331.904 316.774 332.052 317.355 332.052 318.048C332.052 318.724 331.913 319.322 331.636 319.842C331.358 320.362 330.968 320.804 330.466 321.168C329.963 321.515 329.365 321.783 328.672 321.974C327.978 322.165 327.216 322.26 326.384 322.26C324.841 322.26 323.602 321.957 322.666 321.35C321.747 320.726 321.288 319.877 321.288 318.802C321.288 318.247 321.409 317.814 321.652 317.502C321.912 317.173 322.276 317.008 322.744 317.008C323.16 317.008 323.506 317.129 323.784 317.372C324.078 317.615 324.226 317.935 324.226 318.334C324.226 318.663 324.13 318.975 323.94 319.27C323.766 319.565 323.55 319.781 323.29 319.92C323.515 320.267 323.914 320.544 324.486 320.752C325.075 320.96 325.742 321.064 326.488 321.064ZM333.454 308.324L335.976 307.96L336.314 304.684L338.498 304.372V307.96H341.826V309.26H338.498V318.542C338.498 319.131 338.506 319.539 338.524 319.764C338.541 319.972 338.576 320.145 338.628 320.284C338.68 320.423 338.775 320.509 338.914 320.544C339.052 320.579 339.278 320.596 339.59 320.596H341.41V321.35C340.578 321.662 339.841 321.887 339.2 322.026C338.576 322.182 338.073 322.26 337.692 322.26C336.912 322.26 336.409 321.939 336.184 321.298C336.097 321.09 336.036 320.83 336.002 320.518C335.984 320.189 335.976 319.695 335.976 319.036V309.26H333.454V308.324ZM355.043 318.88L355.355 320.414H355.485L355.797 318.88L358.839 307.7H360.711L363.857 318.88L364.169 320.414H364.273L364.585 318.88L367.185 309.52L365.495 309.026V307.96H370.435V309.026L369.031 309.52L365.157 322.26H362.479L359.385 312.12L356.369 322.26H353.691L349.713 309.52L348.335 309.026V307.96H354.159V309.026L352.365 309.52L355.043 318.88ZM371.557 318.958C371.557 318.282 371.705 317.684 371.999 317.164C372.311 316.644 372.797 316.185 373.455 315.786C374.114 315.37 374.963 315.015 376.003 314.72C377.043 314.425 378.291 314.165 379.747 313.94C379.661 312.917 379.557 312.12 379.435 311.548C379.331 310.976 379.184 310.517 378.993 310.17C378.751 309.719 378.413 309.39 377.979 309.182C377.546 308.957 377.078 308.844 376.575 308.844C376.09 308.844 375.648 308.931 375.249 309.104C374.868 309.277 374.608 309.511 374.469 309.806C374.712 309.997 374.885 310.231 374.989 310.508C375.111 310.768 375.171 311.019 375.171 311.262C375.171 311.695 375.024 312.042 374.729 312.302C374.452 312.545 374.105 312.666 373.689 312.666C373.273 312.666 372.927 312.527 372.649 312.25C372.389 311.973 372.259 311.583 372.259 311.08C372.259 310.543 372.407 310.066 372.701 309.65C372.996 309.217 373.377 308.861 373.845 308.584C374.331 308.289 374.868 308.073 375.457 307.934C376.064 307.778 376.662 307.7 377.251 307.7C378.725 307.7 379.886 308.125 380.735 308.974C381.81 310.049 382.347 311.955 382.347 314.694V318.464C382.347 319.331 382.399 319.929 382.503 320.258C382.625 320.57 382.876 320.726 383.257 320.726H384.427V321.506C383.179 322.009 382.209 322.26 381.515 322.26C381.255 322.26 381.039 322.217 380.865 322.13C380.692 322.043 380.553 321.896 380.449 321.688C380.345 321.463 380.267 321.168 380.215 320.804C380.181 320.44 380.163 319.981 380.163 319.426H380.059C379.522 320.31 378.811 321.003 377.927 321.506C377.043 322.009 376.09 322.26 375.067 322.26C373.975 322.26 373.117 321.974 372.493 321.402C371.869 320.813 371.557 319.998 371.557 318.958ZM376.159 320.752C376.645 320.752 377.147 320.631 377.667 320.388C378.205 320.128 378.655 319.773 379.019 319.322C379.557 318.663 379.825 317.693 379.825 316.41C379.825 316.115 379.817 315.829 379.799 315.552C379.782 315.257 379.756 314.98 379.721 314.72C378.664 314.928 377.78 315.145 377.069 315.37C376.376 315.595 375.813 315.855 375.379 316.15C374.963 316.427 374.669 316.757 374.495 317.138C374.322 317.502 374.235 317.927 374.235 318.412C374.235 319.157 374.4 319.738 374.729 320.154C375.076 320.553 375.553 320.752 376.159 320.752ZM393.024 321.376C392.66 322.381 392.322 323.239 392.01 323.95C391.715 324.661 391.403 325.233 391.074 325.666C390.744 326.117 390.372 326.437 389.956 326.628C389.557 326.836 389.072 326.94 388.5 326.94C388.084 326.94 387.694 326.879 387.33 326.758C386.983 326.654 386.671 326.498 386.394 326.29C386.134 326.082 385.926 325.839 385.77 325.562C385.614 325.285 385.536 324.981 385.536 324.652C385.536 324.167 385.674 323.759 385.952 323.43C386.229 323.118 386.593 322.962 387.044 322.962C387.442 322.962 387.754 323.066 387.98 323.274C388.222 323.499 388.344 323.803 388.344 324.184C388.344 324.427 388.292 324.661 388.188 324.886C388.101 325.111 387.98 325.311 387.824 325.484C387.858 325.675 387.954 325.796 388.11 325.848C388.283 325.9 388.439 325.926 388.578 325.926C388.751 325.926 388.916 325.9 389.072 325.848C389.245 325.796 389.41 325.666 389.566 325.458C389.739 325.267 389.912 324.99 390.086 324.626C390.276 324.262 390.476 323.768 390.684 323.144L390.996 322.182L385.614 309.52L384.054 309.026V307.96H389.878L390.086 309.026L388.24 309.52L392.114 319.712H392.218L395.494 309.52L393.986 309.026V307.96H398.926V309.026L397.34 309.52L393.024 321.376ZM405.411 308.324L407.933 307.96L408.271 304.684L410.455 304.372V307.96H413.783V309.26H410.455V318.542C410.455 319.131 410.463 319.539 410.481 319.764C410.498 319.972 410.533 320.145 410.585 320.284C410.637 320.423 410.732 320.509 410.871 320.544C411.009 320.579 411.235 320.596 411.547 320.596H413.367V321.35C412.535 321.662 411.798 321.887 411.157 322.026C410.533 322.182 410.03 322.26 409.649 322.26C408.869 322.26 408.366 321.939 408.141 321.298C408.054 321.09 407.993 320.83 407.959 320.518C407.941 320.189 407.933 319.695 407.933 319.036V309.26H405.411V308.324ZM427.974 314.85C427.974 315.994 427.801 317.069 427.454 318.074C427.125 319.079 426.657 319.911 426.05 320.57C425.027 321.697 423.519 322.26 421.526 322.26C419.585 322.26 418.103 321.714 417.08 320.622C416.491 319.981 416.031 319.192 415.702 318.256C415.39 317.303 415.234 316.271 415.234 315.162C415.234 314.018 415.399 312.935 415.728 311.912C416.057 310.889 416.534 310.049 417.158 309.39C417.713 308.801 418.354 308.376 419.082 308.116C419.81 307.839 420.659 307.7 421.63 307.7C422.583 307.7 423.441 307.839 424.204 308.116C424.967 308.376 425.608 308.783 426.128 309.338C426.735 309.979 427.194 310.785 427.506 311.756C427.818 312.709 427.974 313.741 427.974 314.85ZM418.016 314.876C418.016 316.956 418.328 318.507 418.952 319.53C419.247 319.981 419.593 320.327 419.992 320.57C420.408 320.795 420.945 320.908 421.604 320.908C422.8 320.908 423.693 320.501 424.282 319.686C424.594 319.235 424.819 318.611 424.958 317.814C425.114 317.017 425.192 316.098 425.192 315.058C425.192 312.995 424.88 311.453 424.256 310.43C423.961 309.979 423.606 309.641 423.19 309.416C422.774 309.173 422.237 309.052 421.578 309.052C420.365 309.052 419.489 309.451 418.952 310.248C418.328 311.219 418.016 312.761 418.016 314.876ZM445.418 304.424C443.772 304.424 442.541 304.961 441.726 306.036C441.206 306.712 440.799 307.605 440.504 308.714C440.21 309.806 440.062 311.011 440.062 312.328C440.062 313.576 440.192 314.737 440.452 315.812C440.712 316.869 441.076 317.762 441.544 318.49C442.012 319.218 442.576 319.755 443.234 320.102C443.91 320.431 444.751 320.596 445.756 320.596C447.299 320.596 448.53 320.232 449.448 319.504C450.367 318.759 450.948 317.658 451.19 316.202H452.62C452.222 318.247 451.442 319.773 450.28 320.778C449.119 321.766 447.524 322.26 445.496 322.26C443.104 322.26 441.198 321.567 439.776 320.18C438.927 319.348 438.277 318.308 437.826 317.06C437.376 315.795 437.15 314.382 437.15 312.822C437.15 311.071 437.436 309.494 438.008 308.09C438.58 306.669 439.386 305.525 440.426 304.658C441.744 303.566 443.486 303.02 445.652 303.02C446.19 303.02 446.666 303.055 447.082 303.124C447.516 303.176 447.914 303.28 448.278 303.436C448.642 303.575 448.98 303.765 449.292 304.008C449.622 304.251 449.951 304.554 450.28 304.918L450.8 303.28H452.23V309.026H450.644C450.142 305.958 448.4 304.424 445.418 304.424ZM461.892 322.286C460.852 322.286 459.916 322.13 459.084 321.818C458.252 321.506 457.559 321.064 457.004 320.492L456.718 322H455.262V316.098H456.848C456.952 317.762 457.359 318.975 458.07 319.738C458.798 320.483 459.907 320.856 461.398 320.856C463.877 320.856 465.116 319.911 465.116 318.022C465.116 317.467 465.003 316.982 464.778 316.566C464.57 316.15 464.267 315.777 463.868 315.448C463.469 315.101 462.975 314.789 462.386 314.512C461.814 314.217 461.164 313.923 460.436 313.628C459.604 313.299 458.867 312.978 458.226 312.666C457.602 312.337 457.073 311.973 456.64 311.574C456.224 311.158 455.903 310.69 455.678 310.17C455.453 309.633 455.34 308.983 455.34 308.22C455.34 306.573 455.851 305.291 456.874 304.372C457.914 303.453 459.301 302.994 461.034 302.994C462.75 302.994 464.145 303.479 465.22 304.45L465.428 303.28H466.884V309.182H465.402C465.402 307.501 465.09 306.287 464.466 305.542C463.859 304.779 462.88 304.398 461.528 304.398C459.153 304.398 457.966 305.481 457.966 307.648C457.966 308.081 458.018 308.454 458.122 308.766C458.226 309.061 458.417 309.338 458.694 309.598C458.989 309.858 459.379 310.109 459.864 310.352C460.349 310.595 460.973 310.881 461.736 311.21C462.811 311.678 463.729 312.129 464.492 312.562C465.255 312.978 465.87 313.42 466.338 313.888C466.823 314.356 467.179 314.859 467.404 315.396C467.629 315.933 467.742 316.54 467.742 317.216C467.742 318.013 467.595 318.733 467.3 319.374C467.023 319.998 466.624 320.527 466.104 320.96C465.601 321.393 464.986 321.723 464.258 321.948C463.547 322.173 462.759 322.286 461.892 322.286ZM481.18 315.708H474.212L472.626 320.336L474.784 320.882V322H468.7V320.882L470.832 320.336L477.072 303.02H479.49L485.652 320.336L487.732 320.882V322H480.582V320.882L482.714 320.336L481.18 315.708ZM474.732 314.2H480.686L477.878 305.334H477.774L474.732 314.2Z" fill="black"/>
</svg>

        </Scrollbar>
      </Activity>
    )
  }
}

const mapStateToProps = state => {

  return {

  }
}

export default connect(mapStateToProps)(injectIntl(withTheme(withFirebase(Dashboard))))
