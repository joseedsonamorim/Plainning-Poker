ARG GO_VERSION=1
FROM golang:${GO_VERSION}-bookworm as builder

WORKDIR /usr/src/app

COPY backend/go.mod backend/go.sum ./
RUN go mod download && go mod verify

COPY backend/. .
RUN go build -v -o /run-app ./cmd/

FROM debian:bookworm
COPY --from=builder /run-app /usr/local/bin/
CMD ["/usr/local/bin/run-app"]
