FROM golang:1.19 as dev
ENV GOTRACEBACK=all
WORKDIR /code
COPY go.mod .
COPY go.sum .
COPY main.go .

# `skaffold debug` sets SKAFFOLD_GO_GCFLAGS to disable compiler optimizations
ARG SKAFFOLD_GO_GCFLAGS
RUN go build -gcflags="${SKAFFOLD_GO_GCFLAGS}" -trimpath -o /app .

FROM dev
ENV GOTRACEBACK=single
COPY --from=dev /app .
CMD ["./app"]
