import moment from 'moment';

declare namespace ILogger {
  interface ILoggerInterface {
    log(...args: any[]): any;

    warn(...args: any[]): any;

    info(...args: any[]): any;

    error(...args: any[]): any;

    [key: string]: any;
  }
}

const COLORS = {
  default: '#9A9A9A',
  error: 'red',
  warn: 'orange',
  store: '#269ED6',
  redux: '#269ED6',
  actions: '#269ED6',
  controllers: '#2155D0',
  components: '#9BC800',
  api: '#954DD1'
};

const ORIGINALS: ILogger.ILoggerInterface = (window.console as any).originals ? {
  ...(window.console as any).originals
} : {
  log: window.console.log,
  warn: window.console.warn,
  info: window.console.info,
  error: window.console.error
};

const selfWindow = window;

function getComponentColor(componentName: string) {
  componentName = componentName.toLowerCase();
  let color = COLORS.default;

  if (componentName.includes('action')) {
    color = COLORS.actions;
  } else if (componentName.includes('store') || componentName.includes('storage')) {
    color = COLORS.store;
  } else if (componentName.includes('redux')) {
    color = COLORS.redux;
  } else if (
    componentName.includes('controller') ||
    componentName.includes('ctrl') ||
    componentName.includes('worker')
  ) {
    color = COLORS.controllers;
  } else if (componentName.includes('component')) {
    color = COLORS.components;
  } else if (componentName.includes('api')) {
    color = COLORS.api;
  }

  return color;
}

const fireConsole = (type: string, component: string, args: any[]) => {
  let color = COLORS.default;
  let componentName = component ? component + ':' : '';

  switch (type) {
    case 'error':
      componentName += ' ERROR';
      color = COLORS.error;
      break;
    case 'warn':
      componentName += ' WARN';
      color = COLORS.warn;
      break;
    default:
      color = getComponentColor(componentName);
      break;
  }

  const time = `[${moment().format('HH:mm:ss SSS')}] ${componentName}`;
  let argsToDisplay = [`%c${time}`, `color: ${color}`, ...args.slice(0)];

  if (selfWindow.console[type].apply) {
    ORIGINALS[type].apply(selfWindow.console, argsToDisplay);
  } else {
    ORIGINALS[type](argsToDisplay.join());
  }
};

const setName = (componentName: string): ILogger.ILoggerInterface => {
  return {
    log: (...args: any[]): void => {
      fireConsole('log', componentName, args);
    },
    info: (...args: any[]): void => {
      fireConsole('info', componentName, args);
    },
    warn: (...args: any[]): void => {
      fireConsole('warn', componentName, args);
    },
    error: (...args: any[]): void => {
      fireConsole('error', componentName, args);
    }
  };
};

const customConsole = setName('GLOBAL');
window.console.log = customConsole.log;
window.console.warn = customConsole.warn;
window.console.info = customConsole.info;
window.console.error = customConsole.error;
(window.console as any).originals = ORIGINALS;

export default (componentName: string): ILogger.ILoggerInterface => {
  return setName(componentName);
};

export {ILogger};
