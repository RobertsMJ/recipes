FROM golang:1.21 as dev-deps
WORKDIR /code
COPY go.mod go.sum ./
COPY *.go ./
RUN go mod download

FROM dev-deps as dev-build
# `skaffold debug` sets SKAFFOLD_GO_GCFLAGS to disable compiler optimizations
# ARG SKAFFOLD_GO_GCFLAGS
# RUN CGO_ENABLED=0 GOOS=linux go build -gcflags="${SKAFFOLD_GO_GCFLAGS}" -trimpath -o /app .
RUN CGO_ENABLED=0 GOOS=linux go build -o /app

FROM dev-build
ENV GOTRACEBACK=single
COPY --from=dev-build /app ./
CMD ["/app"]
