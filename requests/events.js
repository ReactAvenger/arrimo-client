import { instanceApi } from "../utils/apiUtils/CallApis";
import endPoints from "../utils/apiUtils/EndPoints";

export const httpGetEvents = async () => {

  return await instanceApi({
    uriEndPoint: {
      ...endPoints.event.allEvents,
    },
    header: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  });
};

export const httpAddEvent = async (payload) => {

  return await instanceApi({
    uriEndPoint: {
      ...endPoints.event.addEvent,
    },
    body: payload,
  });
};

export const httpUpdateEvent = async (payload) => {

  return await instanceApi({
    uriEndPoint: {
      ...endPoints.event.updateEvent,
    },
    body: payload,
  });
};

export const httpDeleteEvent = async (payload) => {

  return await instanceApi({
    uriEndPoint: {
      ...endPoints.event.deleteEvent,
    },
    body: payload,
  });
};
