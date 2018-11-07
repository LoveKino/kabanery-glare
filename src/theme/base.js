/**
 * define the default style for kabanery-glare
 */

const {
  mergeDeep
} = require('../util/util');

module.exports = (basics = {
  box: {
    margin: 0
  },

  font: {
    size: {
      normal: '1rem',
      small: '0.75rem'
    },
    color: {
      placeholder: 'rgba(0, 0, 0, 0.54)',
      normal: 'rgba(0, 0, 0, 0.87)'
    }
  },

  line: {
    color: {
      normal: 'rgba(0, 0, 0, 0.42)',
      hover: 'rgb(31,31,31)',
      light: '#1976d2'
    }
  }
}) => {
  const btnBase = {
    normal: {
      border: 0,
      margin: basics.box.margin,
      boxSizing: 'border-box',
      padding: '8px 16px',
      minWidth: 64,
      minHeight: 36,
      fontSize: '0.875rem',
      cursor: 'pointer',
      letterSpacing: '0.02857em',
      fontWeight: '500',
      borderRadius: 4,
      textTransform: 'uppercase',
      lineHeight: '1.5',
      outline: 0
    },

    hover: {
      border: 0,
      margin: basics.box.margin,
      boxSizing: 'border-box',
      padding: '8px 16px',
      minWidth: 64,
      minHeight: 36,
      fontSize: '0.875rem',
      cursor: 'pointer',
      letterSpacing: '0.02857em',
      fontWeight: '500',
      borderRadius: 4,
      textTransform: 'uppercase',
      lineHeight: '1.5',
      textDecoration: 'none',
      outline: 0
    },

    active: {
      border: 0,
      margin: basics.box.margin,
      boxSizing: 'border-box',
      padding: '8px 16px',
      minWidth: 64,
      minHeight: 36,
      fontSize: '0.875rem',
      cursor: 'pointer',
      letterSpacing: '0.02857em',
      fontWeight: '500',
      borderRadius: 4,
      textTransform: 'uppercase',
      lineHeight: '1.5',
      textDecoration: 'none',
      outline: 0
    }
  };

  const badgeBase = {
    width: 22,
    height: 22,
    top: -11,
    right: -11,
    display: 'flex',
    zIndex: 1,
    position: 'absolute',
    flexWrap: 'wrap',
    fontSize: '0.75rem',
    alignItems: 'center',
    borderRadius: '50%',
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  };

  const checkboxBase = {
    margin: '0 12px 0 0',
    padding: 0,
    width: 18,
    height: '100%',
    borderRadius: 2,
    position: 'relative',
    boxSizing: 'border-box'
  };

  return {
    TextField: {
      box: {
        display: 'inline-flex',
        position: 'relative',
        width: 200,
        height: 48,
        cursor: 'text',
        margin: basics.box.margin,
        padding: 0,
        boxSizing: 'border-box'
      },

      placeholder: {
        place: {
          position: 'absolute',
          left: 0,
          fontSize: basics.font.size.normal,
          color: basics.font.color.placeholder,
          cursor: 'text',
          transform: 'translate(0, 24px) scale(1)',
          transition: 'color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms'
        },

        active: {
          position: 'absolute',
          top: 0,
          left: 0,
          fontSize: basics.font.size.normal,
          color: basics.line.color.light,
          transform: 'translate(0, 1.5px) scale(0.75)',
          transition: 'color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms'
        },

        placeContent: {
          position: 'absolute',
          top: 0,
          left: 0,
          transform: 'translate(0, 1.5px) scale(0.75)',
          fontSize: basics.font.size.normal,
          color: basics.font.color.placeholder,
          cursor: 'text'
        }
      },

      input: {
        width: '100%',
        height: 30,
        position: 'absolute',
        bottom: 0,
        left: 0,
        margin: 0,
        padding: '0 6px 0 6px',
        border: 'none',
        borderBottom: `1px solid ${basics.line.color.normal}`,
        fontSize: basics.font.size.normal,
        outline: 'none',
        boxSizing: 'border-box'
      },

      hover: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderBottom: `2px solid ${basics.line.color.hover}`,
      },

      focus: {
        active: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          borderBottom: `2px solid ${basics.line.color.light}`,
          transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms'
        },
        unactive: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          borderBottom: `2px solid ${basics.line.color.light}`,
          transform: 'scaleX(0)',
          transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms'
        }
      }
    },

    // style for button
    Button: {
      box: {
        text: {
          default: mergeDeep(btnBase, {
            normal: {
              color: basics.font.color.normal,
              backgroundColor: 'transparent'
            },
            hover: {
              color: basics.font.color.normal,
              backgroundColor: 'rgba(0, 0, 0, 0.08)',
            },
            active: {
              color: basics.font.color.normal,
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
            }
          }),

          primary: mergeDeep(btnBase, {
            normal: {
              color: '#2196f3',
              backgroundColor: 'transparent'
            },
            hover: {
              color: '#2196f3',
              backgroundColor: 'rgba(33, 150, 243, 0.08)',
            },
            active: {
              color: '#2196f3',
              backgroundColor: 'rgba(33, 150, 243, 0.3)',
            }
          }),

          secondary: mergeDeep(btnBase, {
            normal: {
              color: 'rgb(225, 0, 80)'
            },
            hover: {
              color: 'rgb(225, 0, 80)',
              backgroundColor: 'rgba(225, 0, 80, 0.08)',
            },
            active: {
              color: 'rgb(225, 0, 80)',
              backgroundColor: 'rgba(225, 0, 80, 0.3)',
            }
          })
        },

        contained: {
          default: mergeDeep(btnBase, {
            normal: {
              border: 0,
              color: basics.font.color.normal,
              boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
              backgroundColor: '#e0e0e0'
            },
            hover: {
              border: 0,
              color: basics.font.color.normal,
              boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
              backgroundColor: '#d5d5d5'
            },
            active: {
              border: 0,
              color: basics.font.color.normal,
              boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
              backgroundColor: '#e0e0e0'
            }
          }),

          primary: mergeDeep(btnBase, {
            normal: {
              border: 0,
              color: '#fff',
              boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
              backgroundColor: '#2196f3'
            },
            hover: {
              border: 0,
              color: '#fff',
              boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
              backgroundColor: '#1976d2'
            },
            active: {
              border: 0,
              color: '#fff',
              boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
              backgroundColor: '#2196f3'
            }
          }),

          secondary: mergeDeep(btnBase, {
            normal: {
              border: 0,
              color: '#fff',
              backgroundColor: 'rgb(225, 0, 80)',
              boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)'
            },
            hover: {
              border: 0,
              color: '#fff',
              boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
              backgroundColor: 'rgb(157, 0, 56)'
            },
            active: {
              border: 0,
              color: '#fff',
              boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
              backgroundColor: 'rgb(225, 0, 80)'
            }
          })
        }
      }
    },

    // divider style
    Divider: {
      height: 1,
      margin: 0,
      padding: 0,
      border: 'none',
      flexShrink: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.12)'
    },

    Badge: {
      box: {
        display: 'inline-flex',
        position: 'relative',
        verticalAlign: 'middle'
      },

      badge: {
        primary: Object.assign({
          color: '#fff',
          backgroundColor: '#2196f3'
        }, badgeBase),
        secondary: Object.assign({
          color: '#fff',
          backgroundColor: 'rgb(225, 0, 80)'
        }, badgeBase)
      }
    },

    // checkbox style
    Checkbox: {
      box: {
        margin: 0,
        padding: 0,
        position: 'relative',
        display: 'inline-flex',
        cursor: 'pointer',
        alignItems: 'center',
        verticalAlign: 'middle',
        height: 18,
        lineHeight: 18
      },
      checkbox: {
        default: {
          unchecked: Object.assign({
            border: '2px solid rgba(0, 0, 0, 0.54)'
          }, checkboxBase),
          checked: Object.assign({
            border: '2px solid rgba(0, 0, 0, 0)',
            backgroundColor: 'rgba(0, 0, 0, 0.54)'
          }, checkboxBase)
        },
        primary: {
          unchecked: Object.assign({
            border: '2px solid rgba(0, 0, 0, 0.54)'
          }, checkboxBase),
          checked: Object.assign({
            border: '2px solid #2196f3',
            backgroundColor: '#2196f3'
          }, checkboxBase)
        },
        secondary: {
          unchecked: Object.assign({
            border: '2px solid rgba(0, 0, 0, 0.54)'
          }, checkboxBase),
          checked: Object.assign({
            border: '2px solid rgb(225, 0, 80)',
            backgroundColor: 'rgb(225, 0, 80)'
          }, checkboxBase)
        }
      },
      label: {
        color: basics.font.color.normal,
        fontSize: '0.875rem',
        fontWeight: '400',
        lineHeight: '1.5',
        letterSpacing: '0.01071em'
      }
    },

    Text: {
      default: {
        color: basics.font.color.normal,
      },
      h2: {
        color: basics.font.color.normal,
        fontSize: '2.125rem',
        fontWeight: '400',
        lineHeight: '1.17',
        letterSpacing: '0.00735em',
        margin: 0,
        padding: '32px 0 24px',
        display: 'inline-flex'
      }
    },
    Br: {},
    ToolBar: {
      box: {
        boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
        minHeight: 64,
        boxSizing: 'border-box',
        paddingLeft: 24,
        paddingRight: 24,
        display: 'flex',
        alignItems: 'center'
      },
      toolBar: {
        primary: {
          backgroundColor: '#2196f3',
          color: 'white'
        },
        default: {
          backgroundColor: '#f5f5f5',
          color: 'rgba(0, 0, 0, 0.87)'
        }
      },

      title: {
        flexGrow: '1',
        fontSize: '1.25rem',
        fontWeight: '500',
        lineHeight: 1.6,
        letterSpacing: '0.0075em'
      }
    },
    ToolBarLeft: {
      primary: {
        marginRight: 12
      },
      default: {
        marginRight: 12
      }
    },
    ToolBarRight: {
      primary: {
        marginLeft: 12
      },
      default: {
        marginLeft: 12
      }
    }
  };
};
