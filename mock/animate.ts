import { MockMethod } from 'vite-plugin-mock'

const userToken = 'EP_ADMIN_TOKEN'

export default [
  {
    url: '/api/list/getAnimateList',
    method: 'get',
    response: ({ headers }) => {
      const { authorisation } = headers

      if (authorisation && authorisation === userToken) {
        return {
          code: 200,
          message: '数据获取成功!',
          data: {
            entrances: [
              {
                label: 'Attention seekers',
                options: [
                  {
                    label: 'animate__bounce',
                    value: 'animate__bounce'
                  },
                  {
                    label: 'animate__flash',
                    value: 'animate__flash'
                  },
                  {
                    label: 'animate__pulse',
                    value: 'animate__pulse'
                  },
                  {
                    label: 'animate__rubberBand',
                    value: 'animate__rubberBand'
                  },
                  {
                    label: 'animate__shakeX',
                    value: 'animate__shakeX'
                  },
                  {
                    label: 'animate__shakeY',
                    value: 'animate__shakeY'
                  },
                  {
                    label: 'animate__headShake',
                    value: 'animate__headShake'
                  },
                  {
                    label: 'animate__swing',
                    value: 'animate__swing'
                  },
                  {
                    label: 'animate__tada',
                    value: 'animate__tada'
                  },
                  {
                    label: 'animate__wobble',
                    value: 'animate__wobble'
                  },
                  {
                    label: 'animate__jello',
                    value: 'animate__jello'
                  },
                  {
                    label: 'animate__heartBeat',
                    value: 'animate__heartBeat'
                  }
                ]
              },
              {
                label: 'Back entrances',
                options: [
                  {
                    label: 'animate__backInDown',
                    value: 'animate__backInDown'
                  },
                  {
                    label: 'animate__backInLeft',
                    value: 'animate__backInLeft'
                  },
                  {
                    label: 'animate__backInRight',
                    value: 'animate__backInRight'
                  },
                  {
                    label: 'animate__backInUp',
                    value: 'animate__backInUp'
                  }
                ]
              },
              {
                label: 'Bouncing entrances',
                options: [
                  {
                    label: 'animate__bounceIn',
                    value: 'animate__bounceIn'
                  },
                  {
                    label: 'animate__bounceInDown',
                    value: 'animate__bounceInDown'
                  },
                  {
                    label: 'animate__bounceInLeft',
                    value: 'animate__bounceInLeft'
                  },
                  {
                    label: 'animate__bounceInRight',
                    value: 'animate__bounceInRight'
                  },
                  {
                    label: 'animate__bounceInUp',
                    value: 'animate__bounceInUp'
                  }
                ]
              },
              {
                label: 'Fading entrances',
                options: [
                  {
                    label: 'animate__fadeIn',
                    value: 'animate__fadeIn'
                  },
                  {
                    label: 'animate__fadeInDown',
                    value: 'animate__fadeInDown'
                  },
                  {
                    label: 'animate__fadeInDownBig',
                    value: 'animate__fadeInDownBig'
                  },
                  {
                    label: 'animate__fadeInLeft',
                    value: 'animate__fadeInLeft'
                  },
                  {
                    label: 'animate__fadeInLeftBig',
                    value: 'animate__fadeInLeftBig'
                  },
                  {
                    label: 'animate__fadeInRight',
                    value: 'animate__fadeInRight'
                  },
                  {
                    label: 'animate__fadeInRightBig',
                    value: 'animate__fadeInRightBig'
                  },
                  {
                    label: 'animate__fadeInUp',
                    value: 'animate__fadeInUp'
                  },
                  {
                    label: 'animate__fadeInUpBig',
                    value: 'animate__fadeInUpBig'
                  },
                  {
                    label: 'animate__fadeInTopLeft',
                    value: 'animate__fadeInTopLeft'
                  },
                  {
                    label: 'animate__fadeInTopRight',
                    value: 'animate__fadeInTopRight'
                  },
                  {
                    label: 'animate__fadeInBottomLeft',
                    value: 'animate__fadeInBottomLeft'
                  },
                  {
                    label: 'animate__fadeInBottomRight',
                    value: 'animate__fadeInBottomRight'
                  }
                ]
              },
              {
                label: 'Rotating entrances',
                options: [
                  {
                    label: 'animate__rotateIn',
                    value: 'animate__rotateIn'
                  },
                  {
                    label: 'animate__rotateInDownLeft',
                    value: 'animate__rotateInDownLeft'
                  },
                  {
                    label: 'animate__rotateInDownRight',
                    value: 'animate__rotateInDownRight'
                  },
                  {
                    label: 'animate__rotateInUpLeft',
                    value: 'animate__rotateInUpLeft'
                  },
                  {
                    label: 'animate__rotateInUpRight',
                    value: 'animate__rotateInUpRight'
                  }
                ]
              },
              {
                label: 'Zooming entrances',
                options: [
                  {
                    label: 'animate__zoomIn',
                    value: 'animate__zoomIn'
                  },
                  {
                    label: 'animate__zoomInDown',
                    value: 'animate__zoomInDown'
                  },
                  {
                    label: 'animate__zoomInLeft',
                    value: 'animate__zoomInLeft'
                  },
                  {
                    label: 'animate__zoomInRight',
                    value: 'animate__zoomInRight'
                  },
                  {
                    label: 'animate__zoomInUp',
                    value: 'animate__zoomInUp'
                  }
                ]
              },
              {
                label: 'Sliding entrances',
                options: [
                  {
                    label: 'animate__slideInDown',
                    value: 'animate__slideInDown'
                  },
                  {
                    label: 'animate__slideInLeft',
                    value: 'animate__slideInLeft'
                  },
                  {
                    label: 'animate__slideInRight',
                    value: 'animate__slideInRight'
                  },
                  {
                    label: 'animate__slideInUp',
                    value: 'animate__slideInUp'
                  }
                ]
              }
            ],
            exits: [
              {
                label: 'Back exits',
                options: [
                  {
                    label: 'animate__backOutDown',
                    value: 'animate__backOutDown'
                  },
                  {
                    label: 'animate__backOutLeft',
                    value: 'animate__backOutLeft'
                  },
                  {
                    label: 'animate__backOutRight',
                    value: 'animate__backOutRight'
                  },
                  {
                    label: 'animate__backOutUp',
                    value: 'animate__backOutUp'
                  }
                ]
              },
              {
                label: 'Bouncing exits',
                options: [
                  {
                    label: 'animate__bounceOut',
                    value: 'animate__bounceOut'
                  },
                  {
                    label: 'animate__bounceOutDown',
                    value: 'animate__bounceOutDown'
                  },
                  {
                    label: 'animate__bounceOutLeft',
                    value: 'animate__bounceOutLeft'
                  },
                  {
                    label: 'animate__bounceOutRight',
                    value: 'animate__bounceOutRight'
                  },
                  {
                    label: 'animate__bounceOutUp',
                    value: 'animate__bounceOutUp'
                  }
                ]
              },
              {
                label: 'Fading exits',
                options: [
                  {
                    label: 'animate__fadeOut',
                    value: 'animate__fadeOut'
                  },
                  {
                    label: 'animate__fadeOutDown',
                    value: 'animate__fadeOutDown'
                  },
                  {
                    label: 'animate__fadeOutDownBig',
                    value: 'animate__fadeOutDownBig'
                  },
                  {
                    label: 'animate__fadeOutLeft',
                    value: 'animate__fadeOutLeft'
                  },
                  {
                    label: 'animate__fadeOutLeftBig',
                    value: 'animate__fadeOutLeftBig'
                  },
                  {
                    label: 'animate__fadeOutRight',
                    value: 'animate__fadeOutRight'
                  },
                  {
                    label: 'animate__fadeOutRightBig',
                    value: 'animate__fadeOutRightBig'
                  },
                  {
                    label: 'animate__fadeOutUp',
                    value: 'animate__fadeOutUp'
                  },
                  {
                    label: 'animate__fadeOutUpBig',
                    value: 'animate__fadeOutUpBig'
                  },
                  {
                    label: 'animate__fadeOutTopLeft',
                    value: 'animate__fadeOutTopLeft'
                  },
                  {
                    label: 'animate__fadeOutTopRight',
                    value: 'animate__fadeOutTopRight'
                  },
                  {
                    label: 'animate__fadeOutBottomRight',
                    value: 'animate__fadeOutBottomRight'
                  },
                  {
                    label: 'animate__fadeOutBottomLeft',
                    value: 'animate__fadeOutBottomLeft'
                  }
                ]
              },
              {
                label: 'Rotating exits',
                options: [
                  {
                    label: 'animate__rotateOut',
                    value: 'animate__rotateOut'
                  },
                  {
                    label: 'animate__rotateOutDownLeft',
                    value: 'animate__rotateOutDownLeft'
                  },
                  {
                    label: 'animate__rotateOutDownRight',
                    value: 'animate__rotateOutDownRight'
                  },
                  {
                    label: 'animate__rotateOutUpLeft',
                    value: 'animate__rotateOutUpLeft'
                  },
                  {
                    label: 'animate__rotateOutUpRight',
                    value: 'animate__rotateOutUpRight'
                  }
                ]
              },
              {
                label: 'Zooming exits',
                options: [
                  {
                    label: 'animate__zoomOut',
                    value: 'animate__zoomOut'
                  },
                  {
                    label: 'animate__zoomOutDown',
                    value: 'animate__zoomOutDown'
                  },
                  {
                    label: 'animate__zoomOutLeft',
                    value: 'animate__zoomOutLeft'
                  },
                  {
                    label: 'animate__zoomOutRight',
                    value: 'animate__zoomOutRight'
                  },
                  {
                    label: 'animate__zoomOutUp',
                    value: 'animate__zoomOutUp'
                  }
                ]
              },
              {
                label: 'Sliding exits',
                options: [
                  {
                    label: 'animate__slideOutDown',
                    value: 'animate__slideOutDown'
                  },
                  {
                    label: 'animate__slideOutLeft',
                    value: 'animate__slideOutLeft'
                  },
                  {
                    label: 'animate__slideOutRight',
                    value: 'animate__slideOutRight'
                  },
                  {
                    label: 'animate__slideOutUp',
                    value: 'animate__slideOutUp'
                  }
                ]
              }
            ],
            other: [
              {
                label: 'Flippers',
                options: [
                  {
                    label: 'animate__flip',
                    value: 'animate__flip'
                  },
                  {
                    label: 'animate__flipInX',
                    value: 'animate__flipInX'
                  },
                  {
                    label: 'animate__flipInY',
                    value: 'animate__flipInY'
                  },
                  {
                    label: 'animate__flipOutX',
                    value: 'animate__flipOutX'
                  },
                  {
                    label: 'animate__flipOutY',
                    value: 'animate__flipOutY'
                  }
                ]
              },
              {
                label: 'Lightspeed',
                options: [
                  {
                    label: 'animate__lightSpeedInRight',
                    value: 'animate__lightSpeedInRight'
                  },
                  {
                    label: 'animate__lightSpeedInRight',
                    value: 'animate__lightSpeedInRight'
                  },
                  {
                    label: 'animate__lightSpeedOutRight',
                    value: 'animate__lightSpeedOutRight'
                  },
                  {
                    label: 'animate__lightSpeedOutLeft',
                    value: 'animate__lightSpeedOutLeft'
                  }
                ]
              },
              {
                label: 'Specials',
                options: [
                  {
                    label: 'animate__hinge',
                    value: 'animate__hinge'
                  },
                  {
                    label: 'animate__jackInTheBox',
                    value: 'animate__jackInTheBox'
                  },
                  {
                    label: 'animate__rollIn',
                    value: 'animate__rollIn'
                  },
                  {
                    label: 'animate__rollOut',
                    value: 'animate__rollOut'
                  }
                ]
              }
            ]
          }
        }
      }

      return {
        code: 1000,
        message: '用户token存在问题！',
        data: null
      }
    }
  }
] as MockMethod[]
