import api from "./api";

const eventApi = api.injectEndpoints({
    endpoints: (build) => ({
        getEvents: build.query({
            query: () => "events",
            transformResponse: (response) => response.data,
            transformErrorResponse: (response) => response.data.error,
            providesTags: ["Event"],
        }),
        getEvent: build.query({
            query: (id) => "events/" + id,
            transformResponse: (response) => response.data,
            transformErrorResponse: (response) => response.data.error,
            providesTags: ["Event"],
        }),
        postEvent: build.mutation({
            query: (event) => ({
                url: "events",
                method: "POST",
                body: event,
            }),
            invalidatesTags: ["Event"],
            transformResponse: (response) => response.data,
        }),
        deleteEvent: build.mutation({
            query: (id) => ({
                url: "events/" + id,
                method: "DELETE",
            }),
            invalidatesTags: ["Event"],
        }),
    }),
});

export const {
    useGetEventsQuery,
    useGetEventQuery,
    usePostEventMutation,
    useDeleteEventMutation,
} = eventApi;
